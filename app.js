const express = require('express');
const cors = require('cors');
const authorGroupRouter = require('./routes/authorGroupRoutes')
const bookRouter = require('./routes/bookRoutes');
const userRouter = require('./routes/userRoutes');
const chapterRouter = require('./routes/chapterRoutes')
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/public`));

//ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/authorgroup', authorGroupRouter);
app.use('/api/v1/chapters', chapterRouter)
app.get('/', (req, res) => {
    res.send("Hello world");
})
 

//START SERVER
module.exports = app;