// This file is for things that are not related to express such as DB config, error handling, env variables etc
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const {Server} = require('socket.io');
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

const io = new Server(server, {
    cors: {credentials: true, origin: process.env.FRONT_END_URL}}
);

io.on("connection", (socket) => {
    const chapterId = socket.handshake.query.chapterId;

    socket.join(chapterId);

    console.log("new client for room", socket.handshake.query.chapterId)

    socket.on("change", (arg) => {
        console.log("broadcasting to " + chapterId + " " + JSON.stringify(arg))
        socket.to(chapterId).emit("change", arg);
    });
})
