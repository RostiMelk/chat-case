import React from 'react';

const Input = ({ value, onChange, type, placeholder, className, onSubmit }) => {
	return (
		<input
			type={type || 'text'}
			className={className || 'input'}
			value={value}
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
			onKeyPress={(event) => {
				if (event.key === 'Enter') {
					onSubmit();
				}
			}}
		/>
	);
};

export default Input;
