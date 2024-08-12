const prisma = require('../lib/prisma');

exports.getAllAuthorGroups = async (req, res) => {
    try {
        const authorGroups = await prisma.author_group.findMany({
            include: {
                account_author_group_member: {
                    select: {
                        account: true
                    }
                }
            }
        });
        res.status(200).json({
        status: 'success',
        results: authorGroups.length,
        data: {authorGroups}
        })
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
    
}

exports.createAuthorGroup = async (req, res) => {
    try {
        res.body.author_group_id = crypto.randomUUID().toString();
        const newAuthorGroup = await prisma.author_group.create({
            data: req.body
    
        })
        res.status(200).json({
            status: 'success',
            data: {
                newAuthorGroup: newAuthorGroup
            }
        })
    } catch (err) {
        console.log(err)
        console.log(req.body)
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
}

exports.getAuthorGroup = async(req, res) => {
    try {
        const authorGroup = await prisma.author_group.findUnique({
            include: {
                account_author_group_member: {
                    select: {
                        account: true
                    }
                }
            },
            where: {
                author_group_id: req.params.id
            }
        })
        res.status(200).json({
            status: "success",
            data: {authorGroup}
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.updateAuthorGroup = async (req, res) => {
    try {
        const updatedAuthorGroup = await prisma.author_group.update({
            where: {
                author_group_id: req.params.id
            },
            data: req.body
        })
        res.status(200).json({
            status: "success",
            data: {updatedAuthorGroup}
        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.deleteAuthorGroup = async (req, res) => {
    try {
        await prisma.author_group.delete({
            where: {
                author_group_id: req.params.id
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