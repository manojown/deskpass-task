import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./tooltip.css";

const Tooltip = (props) => {
	let timeout;
	const [active, setActive] = useState(false);

	const show = () => {
		timeout = setTimeout(() => {
            setActive(true);
		}, props.delay || 400);
	};

	const hide = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<div
            className='wrapper-tooltip'
			// When to show the tooltip
			onMouseEnter={show}
			onMouseLeave={hide}>
			{props.children}
			{active && (
				<div className={`tooltip ${props.direction || "top"}`} style={props.style}>
					{/* Content, can be html */}
					{props.content}
				</div>
			)}
		</div>
	);
};


Tooltip.defaultProps = {
    position: 'top',
    style:{ backgroundColor: 'black',color:"white" }
};

const propTypes = {
    content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	  ]),
    direction: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
};

Tooltip.propTypes = propTypes

export default Tooltip;
