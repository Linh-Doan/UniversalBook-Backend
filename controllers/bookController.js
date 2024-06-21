exports.checkId = (req, res, next, val) => {
    console.log(`Id is ${val}`)
    if (req.params.id > 10) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid ID'
        })
    }
    next();
}

exports.checkBody = (req, res, next) => {
    if (!req.body.name) {
        return res.status(404).json({
            status: 'fail',
            message: 'Missing name'
        })
    }
    next();
}

exports.getAllBooks = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: 3,
        data: {
            books: [
                { bookId: "1", bookName: "Book Example 1"},
                { bookId: "2", bookName: "Book Example 2"},
                { bookId: "3", bookName: "Book Example 3"}
            ]
        }
    })
}

exports.createBook = (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {
            books: [
                { bookId: "4", bookName: "Book Example 4"}
            ]
        }
    })
}

exports.getBook = (req, res) => {
    const id = req.params.id
    res.status(200).json({
        status: "success",
        data: {
            book: {
                bookId: "4", bookName: "Book Example 4"
            }
        }
    })
}

exports.updateBook = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            book: '<Updated book>'
        }
    })
}

exports.deleteBook = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}