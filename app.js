const express = require('express');
const bookRouter = require('./routes/bookRoutes')
const userRouter = require('./routes/userRoutes')
const authorGroupRouter = require('./routes/authorGroupRoutes')
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
    console.log('Hello from middleware');
    next();
})

//ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/authorgroup', authorGroupRouter)

//START SERVER
module.exports = app;