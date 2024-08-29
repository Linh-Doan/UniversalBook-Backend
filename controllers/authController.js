const prisma = require('../lib/prisma');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
    try {
        const newUser = await prisma.account.create({
            data: {
                account_name: req.body.account_name,
                email: req.body.email,
                account_password: req.body.account_password,
                password_changed_at: req.body.password_changed_at
            }
        });
        createAndSendToken(newUser, 201, res)
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
};

exports.login = async (req, res) => {
    const {email, account_password: password} =  req.body;

    // Check if email and password exist
    if (!email || !password) {
        return res.status(400).json({
            status: 'fail',
            message: 'Please include both email and password'
        });
    };
    // Check if user exists && password is correct
    const user = await prisma.account.findUnique({
        select: {
            account_id: true,
            account_password: true
        },
        where: {
            email: email
        }
    });
    if (!user || !(await correctPassword(password, user.account_password))) {
        return res.status(401).json({
            status: 'fail',
            message: 'Incorrect email or password'
        });
    };
    // Send token
    createAndSendToken(user, 200, res)
}

const correctPassword = async (candidatePassword, userPassword) => {
    return await bcrypt.compare(candidatePassword, userPassword)
}
const signToken = id => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

// Validate JWT from requests to validate before allowing users to access web resources
exports.protect = async (req, res, next) => {
    let token;
    // Check if token exists
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bear')) {
        token = req.headers.authorization.split(' ')[1];
        // console.log(token)
    }
    if (!token) {
        return res.status(401).json({
            status: 'fail',
            message: 'Login to access this data'
        })
    }
    // Validate token
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({
            status: 'fail',
            message: 'Invalid JWT. Please log in again'
        })
    }
    // Check if user still exists
    const user = await prisma.account.findUnique({
        where: {
            account_id: decoded.id
        }
    })
    if (!user) {
        return res.status(401).json({
            status: 'fail',
            message: 'This user no longer exists'
        })
    }
    // Check if user changed password after the token was issued
    if (passwordChangedAfterJWT(user.password_changed_at, decoded.iat)) {
        return res.status(401).json({
            status: 'fail',
            message: 'Password has been changed. Please login again'
        }) 
    }
    next();
}
const passwordChangedAfterJWT = (changedTime, JWTTime) => {
    let changedTimeAsInt;
    if (changedTime) {
        changedTimeAsInt = parseInt(changedTime.getTime()/1000, 10)
    }
    return JWTTime < changedTimeAsInt
}

const createAndSendToken = (user, statusCode, res) => {
    const token = signToken(user.account_id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true // Cannot be accessed or modified by browsers
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true; // HTTPS
    res.cookie('jwt', token, cookieOptions)
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    })
}