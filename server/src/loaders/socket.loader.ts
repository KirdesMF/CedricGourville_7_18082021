import { Server as SocketServer } from 'socket.io';
import { Server as HttpServer } from 'http';

let io: SocketServer;

const allowedOrigin = 'http://localhost:3000';

function init(server: HttpServer) {
  io = new SocketServer(server, {
    cors: {
      origin: allowedOrigin,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`🔮 Socket server is listening id: ${socket.id}`);

    socket.on('new-comment', (postId) => {
      socket.broadcast.emit('new-comment', postId);
    });

    socket.on('new-post', () => {
      socket.broadcast.emit('new-post');
    });
  });
}

function use() {
  return io;
}

export const Socket = { init, use };
