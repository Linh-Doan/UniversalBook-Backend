const prisma = require('../lib/prisma');

// Create a new book-genre association
exports.createBookGenre = async (req, res) => {
    try {
        const { bookId, genreId } = req.body;
        const newBookGenre = await prisma.book_genre.create({
            data: {
                book_id: bookId,
                genre_id: genreId,
            }
        });

        res.status(201).json({
            status: 'success',
            data: { bookGenre: newBookGenre }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a list of genres associated with a book
exports.getGenresByBookId = async (req, res) => {
    try {
        const { bookId } = req.params;

        // Query to find genres associated with the given bookId
        const genres = await prisma.book_genre.findMany({
            where: {
                book_id: bookId,
            },
            include: {
                genre: {
                    select: {
                        genre_name: true
                    }
                }
            }
        });

        const genreNames = genres.map(genre => genre.genre.genre_name);

        res.status(200).json({
            status: 'success',
            results: genreNames.length,
            data: { genres: genreNames }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};
