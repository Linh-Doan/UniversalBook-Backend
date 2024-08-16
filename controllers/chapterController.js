const prisma = require('../lib/prisma');

exports.getAllChapters = async (req, res) => {
    try {
        const chapters = await prisma.chapter.findMany();
        res.status(200).json({
            status: 'success',
            results: chapters.length,
            data: { chapters }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message || 'Could not retrieve chapters'
        });
    }
};

exports.createChapter = async (req, res) => {
    try {
        const newChapter = await prisma.chapter.create({
            data: req.body
        });
        res.status(201).json({
            status: 'success',
            data: {
                chapter: newChapter
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message || 'Invalid data sent'
        });
    }
};

exports.getChapter = async (req, res) => {
    try {
        const chapter = await prisma.chapter.findUnique({
            where: {
                chapter_id: req.params.id
            }
        });

        if (!chapter) {
            return res.status(404).json({
                status: 'fail',
                message: 'Chapter not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: { chapter }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message || 'Could not retrieve chapter'
        });
    }
};

exports.updateChapter = async (req, res) => {
    try {
        const updatedChapter = await prisma.chapter.update({
            where: {
                chapter_id: req.params.id
            },
            data: req.body
        });

        if (!updatedChapter) {
            return res.status(404).json({
                status: 'fail',
                message: 'Chapter not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: { chapter: updatedChapter }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message || 'Could not update chapter'
        });
    }
};

exports.deleteChapter = async (req, res) => {
    try {
        const deletedChapter = await prisma.chapter.delete({
            where: {
                chapter_id: req.params.id
            }
        });

        if (!deletedChapter) {
            return res.status(404).json({
                status: 'fail',
                message: 'Chapter not found'
            });
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message || 'Could not delete chapter'
        });
    }
};


exports.getTopRatedChapters = async (req, res) => {
    try {
        const chapters = await prisma.chapter.findMany({
            orderBy: {
                chapter_rating: 'desc'
            },
            take: 10 // Limit to top 10
        });
        res.status(200).json({
            status: 'success',
            results: chapters.length,
            data: { chapters }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message || 'Could not retrieve top-rated chapters'
        });
    }
};

exports.getLatestChapters = async (req, res) => {
    try {
        const chapters = await prisma.chapter.findMany({
            orderBy: {
                created_on: 'desc'
            },
            take: 10 // Limit to latest 10
        });
        res.status(200).json({
            status: 'success',
            results: chapters.length,
            data: { chapters }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message || 'Could not retrieve latest chapters'
        });
    }
};
