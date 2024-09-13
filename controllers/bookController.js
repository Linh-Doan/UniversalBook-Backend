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
            status: "fail",
            message: err.message
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
        genres = req.body.genres;
        delete req.body.genres;
        let book = {...req.body, book_genre: {
            create: genres.map(genre => {
                return {genre_id: genre}
            })
        }};
        const newBook = await prisma.book.create({
            data: book
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
        let book = await prisma.book.findUnique({
            where: {
                book_id: req.params.id
            },
            include: {
                author_group: true,
                book_genre: {
                    include: {
                        genre: true
                    }
                }
            }
        })
        if (book) {
            const genres = book.book_genre.map(bookGenre => {return bookGenre.genre});
            book.genres = genres;
            delete book.book_genre;
        }
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