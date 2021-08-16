import React, { useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { useComponentVisible } from '../hooks';
import { Input, Icon, Button } from '../components';

const MessageInput = ({ value, onChange, onSubmit }) => {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	const onEmojiClick = (event, { emoji }) => {
		onChange(value + emoji);
	};

	useEffect(() => {
		console.log(isComponentVisible);
	}, [isComponentVisible]);

	return (
		<div className="message-input">
			<div className="message-input__wrapper">
				<Input
					className="message-input__wrapper__input"
					value={value}
					onChange={onChange}
					onSubmit={onSubmit}
					placeholder="Type a message..."
				/>

				<button
					className="message-input__wrapper__button"
					aria-label="Send message"
					onClick={onSubmit}
				>
					<Icon icon="send" />
				</button>
			</div>

			<Button
				icon="emoji_emotions"
				secondary
				onClick={() => setIsComponentVisible(!isComponentVisible)}
			/>

			{isComponentVisible && (
				<div ref={ref} className="message-input__emoji-picker">
					<EmojiPicker onEmojiClick={onEmojiClick} />
				</div>
			)}
		</div>
	);
};

export default MessageInput;
