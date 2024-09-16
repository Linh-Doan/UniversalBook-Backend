const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// Define the GET /api/v1/search route
router.get('/', async (req, res) => {
    const { q, category } = req.query;

    try {
        let results = [];

        if (category === 'books') {
            results = await prisma.book.findMany({
                where: {
                    book_name: {
                        contains: q,
                        mode: 'insensitive'
                    }
                }
            });
        } else if (category === 'genres') {
            results = await prisma.genre.findMany({
                where: {
                    genre_name: {
                        contains: q,
                        mode: 'insensitive'
                    }
                }
            });
        } else if (category === 'chapters') {
            results = await prisma.chapter.findMany({
                where: {
                    chapter_content: {
                        contains: q,
                        mode: 'insensitive'
                    }
                }
            });
        } else if (category === 'people') {
            results = await prisma.author_group.findMany({
                where: {
                    author_group_name: {
                        contains: q,
                        mode: 'insensitive'
                    }
                }
            });
        } else {
            return res.status(400).json({ message: 'Invalid category' });
        }

        return res.json({ results });
    } catch (error) {
        console.error('Error fetching search results:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
