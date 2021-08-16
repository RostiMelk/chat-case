import React from 'react';
import Button from './Button';

const Navbar = ({ handleRoomModal }) => {
	return (
		<header className="navbar">
			<h1 className="navbar__title">
				Hey! Type a message <span className="hand-wave">👋</span>
			</h1>
			<Button icon="group" onClick={handleRoomModal} />
		</header>
	);
};

export default Navbar;
