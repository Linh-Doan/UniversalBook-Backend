const prisma = require('../lib/prisma');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {books}
        })
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
    
}

exports.getTopRatedBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany({
            orderBy: [
                {
                    rating: 'desc'
                }
            ]
        });
        res.status(200).json({
        status: 'success',
        results: books.length,
        data: {books}
        })
    } catch(err) {
        console.log(err)
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }

}

exports.getLatestBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany({
            orderBy: [
                {
                    created_on: 'desc'
                }
            ]
        });
        res.status(200).json({
        status: 'success',
        results: books.length,
        data: {books}
        })
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    } 
}

exports.createBook = async (req, res) => {
    try {
        const newBook = await prisma.book.create({
            data: req.body
    
        })
        res.status(200).json({
            status: 'success',
            data: {
                book: newBook
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        })
    }
}

exports.getBook = async(req, res) => {
    try {
        const book = await prisma.book.findUnique({
            where: {
                book_id: req.params.id
            },
            include: {
                author_group: true,
                genre: true
            }
        })
        res.status(200).json({
            status: "success",
            data: {book}
        })
    } catch (err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await prisma.book.update({
            where: {
                book_id: req.params.id
            },
            data: req.body
        })
        res.status(200).json({
            status: "success",
            data: {updatedBook}
        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
}

exports.deleteBook = async (req, res) => {
    try {
        await prisma.book.delete({
            where: {
                book_id: req.params.id
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