import React, { useState } from 'react';
import { Input, Button } from '../components';

const RoomModal = () => {
	const [room, setRoom] = useState('');

	return (
		<div className="room-modal">
			<header>
				<h2>Enter a custom room</h2>
			</header>

			<Input
				placeholder="Enter a room #id..."
				type="number"
				value={room}
				onChange={(value) => setRoom(value)}
			/>
			<Button label="Enter" />

			<p className="divider">OR</p>

			<Button label="Create a new room" secondary={true} />
		</div>
	);
};

export default RoomModal;
