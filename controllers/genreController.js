const prisma = require('../lib/prisma');

// Get all genres
exports.getAllGenres = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany({
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: genres.length,
            data: { genres }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get top-rated genres
exports.getTopRatedGenres = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany({
            orderBy: {
                genre_rating: 'desc'
            },
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: genres.length,
            data: { genres }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get the latest genres
exports.getLatestGenres = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany({
            orderBy: {
                created_on: 'desc'
            },
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: genres.length,
            data: { genres }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get the most followed genres
exports.getMostFollowedGenres = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany({
            orderBy: {
                account_genre_follow: {
                    _count: 'desc'
                }
            },
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: genres.length,
            data: { genres }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Check if a user follows a specific genre
exports.isUserFollowingGenre = async (req, res) => {
    try {
        const { accountId, genreId } = req.params;
        const follow = await prisma.account_genre_follow.findUnique({
            where: {
                account_id_genre_id: {
                    account_id: accountId,
                    genre_id: genreId
                }
            }
        });
        res.status(200).json({
            status: 'success',
            data: { isFollowing: !!follow }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a specific genre by ID
exports.getGenre = async (req, res) => {
    try {
        const genre = await prisma.genre.findUnique({
            where: { genre_id: req.params.id },
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            }
        });
        if (!genre) {
            return res.status(404).json({
                status: 'fail',
                message: 'Genre not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: { genre }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new genre
exports.createGenre = async (req, res) => {
    try {
        const newGenre = await prisma.genre.create({
            data: req.body
        });
        res.status(201).json({
            status: 'success',
            data: { genre: newGenre }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        });
    }
};

// Update a genre by ID
exports.updateGenre = async (req, res) => {
    try {
        const updatedGenre = await prisma.genre.update({
            where: { genre_id: req.params.id },
            data: req.body
        });
        res.status(200).json({
            status: 'success',
            data: { genre: updatedGenre }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete a genre by ID
exports.deleteGenre = async (req, res) => {
    try {
        await prisma.genre.delete({
            where: { genre_id: req.params.id }
        });
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get trending genres
exports.getTrendingGenres = async (req, res) => {
    try {
        const trendingGenres = await prisma.genre.findMany({
            where: {
                account_genre_follow: {
                    some: {
                        last_followed_on: {
                            gte: new Date(new Date().setDate(new Date().getDate() - 19))
                        }
                    }
                }
            },
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            },
            orderBy: {
                account_genre_follow: {
                    _count: 'desc'
                }
            }
        });
        res.status(200).json({
            status: 'success',
            results: trendingGenres.length,
            data: { genres: trendingGenres }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get discover genres
exports.getDiscoverGenres = async (req, res) => {
    try {
        const discoverGenres = await prisma.genre.findMany({
            orderBy: [
                { created_on: 'desc' },  // Sort by newest
                { genre_rating: 'desc' } // Could include popularity or rating
            ],
            include: {
                _count: {
                    select: { account_genre_follow: true }
                }
            },
            take: 10
        });
        res.status(200).json({
            status: 'success',
            results: discoverGenres.length,
            data: { genres: discoverGenres }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};
