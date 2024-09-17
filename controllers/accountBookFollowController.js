const prisma = require('../lib/prisma');
exports.getRelationship = async (req, res, next) => {
    try {
        if (req.query.account_id && req.query.book_id) {
            const relationship = await prisma.account_book_follow.findFirst({
                where: {
                    account_id: req.query.account_id,
                    book_id: req.query.book_id
                }
            });
            res.status(200).json({
                status: "success",
                data: {relationship}
            })
        } else {
            next();
        }
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.getBooksAccountIsFollowing = async (req, res) => {
    try {
        if (req.query.account_id) {
            const relationships = await prisma.account_book_follow.findMany({
                where: {
                    account_id: req.query.account_id
                },
                include: {
                    book: true
                }
            });
            res.status(200).json({
                status: "success",
                data: {relationships}
            })
        } else {
            res.status(500).json({
                status: 'error',
                message: 'this route is not yet defined'
            })
        }
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.createRelationship = async (req, res) => {
    try {
        const newRelationship = await prisma.account_book_follow.create({
            data: req.body
    
        })
        res.status(200).json({
            status: 'success',
            data: {
                follow: newRelationship
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
}

exports.deleteRelationship = async (req, res) => {
    try {
        await prisma.account_book_follow.delete({
            where: {
                account_id_book_id: {
                    account_id: req.query.account_id,
                    book_id: req.query.book_id
                }
                
            }
        })
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}