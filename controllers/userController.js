const prisma = require('../lib/prisma');

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

exports.getUsers = (req, res) =>{
    if (req.query.email != null) {
        return getUserByEmail(req, res);
    } else {
        res.status(500).json({
            status: 'error',
            message: 'this route is not yet defined'
            })
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