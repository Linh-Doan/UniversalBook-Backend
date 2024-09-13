const prisma = require('../../lib/prisma');
const { getAllBooks } = require('../../controllers/bookController');

jest.mock('../../lib/prisma', () => ({
    book: {
      findMany: jest.fn(),
    },
}));

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('Book Controller', () => {
    it('should return a list of books', async () => {
        const mockBooks = [{
            "book_id": "1",
            "book_name": "The Luminous Veil",
            "author_group_id": "2",
            "summary_text": "A young sorceress discovers a hidden dimension behind a veil of light, unlocking ancient secrets and untold power. Her journey unveils truths that could alter the fate of her world.",
            "original_book_id": null,
            "book_image_url": "/img/book1.jpeg",
            "is_copiable": false,
            "is_published": false,
            "is_flagged_inappropriate": false,
            "created_on": "2024-09-01T23:25:56.074Z",
            "rating": "4.3",
            "rating_count": 3
        }]
        prisma.book.findMany.mockResolvedValue(mockBooks);
        const req = {};
        const res = mockResponse();
  
        await getAllBooks(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            status: 'success',
            results: mockBooks.length,
            data: { books: mockBooks },
        });
    });
    it('should handle errors and return status 404', async () => {
        prisma.book.findMany.mockRejectedValue(new Error('Database error'));

        const req = {}; 
        const res = mockResponse();

        await getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
            status: 'fail',
            message: 'Database error',
        });
    });

});