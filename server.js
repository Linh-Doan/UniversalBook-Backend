// import Delta from 'quill-delta';

// This file is for things that are not related to express such as DB config, error handling, env variables etc
const dotenv = require('dotenv');
dotenv.config();

const Delta = require('quill-delta');

const app = require('./app');
const {Server} = require('socket.io');
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

const io = new Server(server, {
    cors: {credentials: true, origin: process.env.FRONT_END_URL}
}
);

const changeCache = new Map();

io.on("connection", (socket) => {
    const chapterId = socket.handshake.query.chapterId;

    socket.join(chapterId);
    if(changeCache.get(chapterId) == null) {
        console.log(`creating new cache for room ${chapterId}`);
        changeCache.set(chapterId, {changes: new Delta(), numUsers: 1});
    } else {
        changeCache.get(chapterId).numUsers += 1;
        socket.emit("change", {"delta": changeCache.get(chapterId).changes})
    }

    console.log(`new client for room ${socket.handshake.query.chapterId}, num of users ${changeCache.get(chapterId).numUsers}`);

    socket.on("change", (arg) => {
        //console.log("broadcasting to " + chapterId + " " + JSON.stringify(arg));
        changeCache.set(
            chapterId,
            {
                changes: changeCache.get(chapterId).changes.compose(new Delta().transform(arg.delta, true)),
                numUsers: changeCache.get(chapterId).numUsers
            }
        );
        socket.to(chapterId).emit("change", arg);
    });

    socket.on("disconnecting", () => {
        changeCache.get(chapterId).numUsers -= 1;

        console.log(`client left for room ${socket.handshake.query.chapterId}, num of users ${changeCache.get(chapterId).numUsers}`);

        if(changeCache.get(chapterId).numUsers == 0) {
            changeCache.delete(chapterId);
        }
    });
});
