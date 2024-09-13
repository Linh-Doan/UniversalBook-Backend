const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const authorGroupRouter = require('./routes/authorGroupRoutes');
const bookRouter = require('./routes/bookRoutes');
const userRouter = require('./routes/userRoutes');
const genreRouter = require('./routes/genreRoutes');
const chapterRouter = require('./routes/chapterRoutes');
const accountBookFollowRouter = require('./routes/accountBookFollowRoutes');
const bookCommentRouter = require('./routes/bookCommentRoutes');
const searchRouter = require('./routes/searchRoutes');

const app = express();

//MIDDLEWARES
app.use(helmet({crossOriginResourcePolicy: false})); //Ensure HTTP headers are set
const limiter = rateLimit({
    max: 100,
    window: 60 * 60 * 1000,
    message: 'Too many requests from this IP, try again later'
});
app.use('/api',limiter); //Rate limiter
app.use(express.json({ limit: '10kb'})); // Parse request data into req.body
app.use(cors({credentials: true, origin: process.env.FRONT_END_URL}));
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));


//ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/authorgroup', authorGroupRouter);
app.use('/api/v1/chapters', chapterRouter);
app.use('/api/v1/follow/book', accountBookFollowRouter);
app.use('/api/v1/comment/book', bookCommentRouter);
app.use('/api/v1/genres', genreRouter);
app.use('/api/v1/search', searchRouter);
app.get('/', (req, res) => {
    res.send("Hello world");
})
 

//START SERVER
module.exports = app;