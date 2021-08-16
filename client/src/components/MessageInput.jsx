import React from 'react';
import { Input, Icon } from '../components';

const MessageInput = ({ value, onChange, onSubmit }) => {
	return (
		<div className="message-input">
			<Input
				className="message-input__input"
				value={value}
				onChange={onChange}
				onSubmit={onSubmit}
				placeholder="Type a message..."
			/>

			<button className="message-input__button" aria-label="Send message" onClick={onSubmit}>
				<Icon icon="send" />
			</button>
		</div>
	);
};

export default MessageInput;
