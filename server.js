// This file is for things that are not related to express such as DB config, error handling, env variables etc
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const {Server} = require('socket.io');
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

const io = new Server(server);

io.on("connection", (socket) => {
    const chapterId = socket.handshake.query.chapterId;

    socket.join(chapterId);

    socket.on("change", (arg) => {
        socket.to(chapterId).emit("change", arg);
    });
})
