const prisma = require('../lib/prisma');
const jwt = require('jsonwebtoken');

async function getUserByEmail(req, res) {
    try {
        const user = await prisma.account.findUnique({
            include: {
                account_author_group_member: {select: {author_group: true}},
                user_role: true,
                user_role_id: false,
                account_password: false
            },
            
            where: {
                email: req.query.email
            }
        })
        res.status(200).json({
            status: "success",
            data: {user}
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.getUsers = async (req, res) => {
    if (req.query.email != null) {
        return getUserByEmail(req, res);
    } else {
        try {
            const users = await prisma.account.findMany();
            res.status(200).json({
                status: 'success',
                results: users.length,
                data: {users}
            })
        } catch (err) {
            res.status(404).json({
                statue: "fail",
                message: err
            })
        }
    }
}


exports.createUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined'
    })
}

exports.getUser = async(req, res) =>{
    try {
        const user = await prisma.account.findUnique({
            include: {
                account_author_group_member: {select: {author_group: true}},
                user_role: true,
                user_role_id: false,
                account_password: false
            },
            
            where: {
                account_id: req.params.id
            }
        })
        res.status(200).json({
            status: "success",
            data: {user}
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.getCurrentUser = async(req, res) =>{
    try {
        let token = req.cookies['jwt'];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  
        var userId = decoded.id;
        const user = await prisma.account.findUnique({
            include: {
                account_author_group_member: {select: {author_group: true}},
                user_role: true,
                user_role_id: false,
                account_password: false
            },
            where: {
                account_id: userId
            }
        })
        res.status(200).json({
            status: "success",
            data: {user}
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: "No users found"
        })
    }
}



exports.updateUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined'
    })
}

exports.deleteUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined'
    })
}