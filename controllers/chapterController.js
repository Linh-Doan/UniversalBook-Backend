const prisma = require('../lib/prisma');

exports.getAllChapters = async (req, res) => {
    try {
        const chapters = await prisma.chapter.findMany();
        res.status(200).json({
        status: 'success',
        results: chapters.length,
        data: {chapters}
        })
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
    
}

exports.createChapter = async (req, res) => {
    try {
        const newChapter = await prisma.chapter.create({
            data: req.body
    
        })
        res.status(200).json({
            status: 'success',
            data: {
                chapter: newChapter
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
}

exports.getChapter = async(req, res) => {
    try {
        const chapter = await prisma.chapter.findUnique({
            where: {
                chapter_id: req.params.id
            }
        })
        res.status(200).json({
            status: "success",
            data: {chapter}
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.updateChapter = async (req, res) => {
    try {
        const updatedChapter = await prisma.chapter.update({
            where: {
                chapter_id: req.params.id
            },
            data: req.body
        })
        res.status(200).json({
            status: "success",
            data: {updatedChapter}
        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.deleteChapter = async (req, res) => {
    try {
        await prisma.chapter.delete({
            where: {
                chapter_id: req.params.id
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