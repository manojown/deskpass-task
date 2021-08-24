import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./tooltip.css";

const Tooltip = (props) => {
	let timeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
            setActive(true);
            // This is fot tooltip arrow
            if(props.style.backgroundColor)
                document.documentElement.style.setProperty('--tooltip-text-color',props.style.color);
            if(props.style.color)
                document.documentElement.style.setProperty('--tooltip-background-color',props.style.backgroundColor);

		}, props.delay || 400);
	};

	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<div
            className='wrapper-tooltip'
			// When to show the tooltip
			onMouseEnter={showTip}
			onMouseLeave={hideTip}>
			{props.children}
			{active && (
				<div className={`Tooltip-Tip ${props.direction || "top"}`} style={props.style}>
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
    content: PropTypes.string.isRequired,
    direction: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
};

Tooltip.propTypes = propTypes

export default Tooltip;
