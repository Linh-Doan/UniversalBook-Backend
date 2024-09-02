const prisma = require('../lib/prisma');

exports.getCommentsByBookId = async (req, res) => {
    try {
        const comments = await prisma.book_comment.findMany({
            where: {
                book_id: req.query.book_id
            },
            include: {
                account: {
                    select: {
                        account_name: true
                    }
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: comments.length,
            data: {comments: comments}
        })
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
    
}

exports.createBookComment = async (req, res) => {
    try {
        const newComment = await prisma.book_comment.create({
            data: req.body
    
        })
        res.status(200).json({
            status: 'success',
            data: {
                comment: newComment
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
}