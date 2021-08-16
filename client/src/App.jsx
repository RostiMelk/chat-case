import React, { useState, useEffect } from 'react';
import { useSocketIO } from './hooks';
import { Navbar, MessageBubble, MessageInput, RoomModal } from './components';
import './assets/scss/main.scss';

const App = () => {
	const { messages, sendMessage } = useSocketIO();
	const [message, setMessage] = useState('');
	const [roomModal, setRoomModal] = useState(false);

	const handleSendMessage = () => {
		if (!message.length) return;
		sendMessage(message);
		handleReset();
	};

	const handleReset = () => {
		setMessage('');
	};

	return (
		<div className="app-container">
			<Navbar handleRoomModal={() => setRoomModal(true)} />

			<div className="messages-container">
				<p className="messages-container__info-message">
					Messages disappear when you close
				</p>

				{messages.map(({ body, isOwner, time }, index) => (
					<MessageBubble message={body} isOwner={isOwner} key={`${index}-${time}`} />
				))}
			</div>

			<MessageInput
				value={message}
				onChange={(value) => setMessage(value)}
				onSubmit={handleSendMessage}
			/>

			{roomModal && <RoomModal />}
		</div>
	);
};

export default App;
