import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

const Button = ({ children, label, disabled, secondary, icon, onClick }) => {
	const buttonClasses = classNames('button', {
		'button--is-secondary': secondary,
		'button--is-disabled': disabled,
		'button--has-icon': icon,
		'button--has-text': label || children,
	});

	return (
		<button className={buttonClasses} disabled={disabled} onClick={onClick}>
			{icon && <Icon icon={icon} />}
			{label ? label : children}
		</button>
	);
};

export default Button;
