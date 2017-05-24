import React from 'react';

function Button (props){
	return (
		<button onClick={props.onClick}>
			{props.children}

		</button>
	);
};


Button.propTypes = {
	icon: React.PropTypes.string,
	onClick: React.PropTypes.func,
	children: React.PropTypes.node
}

export default Button;
