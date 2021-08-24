import React from "react";
import Tooltip from "./components/Tooltip";
import "./App.css";

export default function App() {
	return (
		<div className='App'>
			<h1>Tooltip</h1>
			<p> Try hovering over</p>

			<div className='wrapper'>
				<Tooltip content={<strong>I'm Left</strong>} direction='left' delay='0'>
					<button>I'm Left without delay</button>
				</Tooltip>
			</div>
			<div className='wrapper'>
				<Tooltip content="I'm Right." direction='right' style={{ backgroundColor: "blue", color: "white" }}>
					<button>I'm Right</button>
				</Tooltip>
			</div>

			<div className='wrapper'>
				<Tooltip content="I'm Top." direction='top' delay='1000'>
					<button>I'm Top with 1 second delay</button>
				</Tooltip>
			</div>

			<div className='wrapper'>
				<Tooltip content="I'm Bottom." direction='bottom' style={{ backgroundColor: "red", color: "white" }}>
					<button>I'm Bottom with default delay</button>
				</Tooltip>
			</div>
		</div>
	);
}
