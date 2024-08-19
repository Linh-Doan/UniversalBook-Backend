const prisma = require('../lib/prisma');

exports.getAllGenres = async (req, res) => {
    try {
        const genres = await prisma.genre.findMany();
        res.status(200).json({
            status: 'success',
            results: genres.length,
            data: {genres: genres}
        })
    } catch(err) {
        res.status(404).json({
            statue: "fail",
            message: err
        })
    }
    
}
