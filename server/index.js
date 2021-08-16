const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const DOMPurify = require('isomorphic-dompurify');

const PORT = process.env.PORT || 8000;
const NEW_MESSAGE_EVENT = 'chat-message-event';

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
	cors: true,
	origins: ['localhost:8001'],
});

app.use(cors());

const room = 'tech-house'; // This is the default room

io.on('connection', (socket) => {
	socket.join(room);

	socket.on(NEW_MESSAGE_EVENT, (data) => {
		console.log(data);
		const cleanBody = DOMPurify.sanitize(data.body); // Sanitize the message body
		io.in(room).emit(NEW_MESSAGE_EVENT, {
			body: cleanBody,
			time: new Date(),
			senderId: data.senderId,
		});
	});

	socket.on('disconnect', () => {
		socket.leave(room);
	});
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
