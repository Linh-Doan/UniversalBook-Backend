const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/bookRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/public`));

//ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/books', bookRouter);
app.get('/', (req, res) => {
    res.send("Universal Book Backend");
})

//START SERVER
module.exports = app;