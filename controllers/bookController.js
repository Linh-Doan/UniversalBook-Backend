const prisma = require('../lib/prisma');

exports.getAllBooks = async (req, res) => {
    try {
        delete req.query.is_published;
        let filters = {...req.query, is_published: true}
        const books = await prisma.book.findMany({
            where: filters
        });
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

// Get all books for a specific genre
exports.getBooksByGenre = async (req, res) => {
    try {
        const genreId = req.params.id;  // Assuming the genre ID is passed as a route parameter

        const books = await prisma.book.findMany({
            where: {
                is_published: true,
                book_genre: {
                    some: {
                        genre_id: genreId
                    }
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: books.length,
            data: { books }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getTopRatedBooks = async (req, res) => {
    try {
        const books = await prisma.$queryRaw`
            WITH ratings AS (
                SELECT book_id, AVG(book_rating) AS rating
                FROM book_comment
                GROUP BY book_id
            )
            SELECT b.*, COALESCE(r.rating, 0) AS book_rating FROM Book b
            LEFT JOIN ratings r ON b.book_id = r.book_id
            ORDER BY book_rating DESC
        `
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

exports.getLatestBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany({
            where: {
                is_published: true
            },
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
            }),
            book_image_url: '/img/default-book.jpeg'
        }};
        if (!('book_image_url' in book)) {
            book = {...req.body, book_image_url: '/img/default-book.jpeg'}
        }
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

exports.getBookChapters = async (req, res) => {
    try {
        const chapters = await prisma.chapter.findMany({
            where: {
                book_id: req.params.id
            }
        });
        res.status(200).json({
            status: "success",
            data: { chapter: chapters }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}