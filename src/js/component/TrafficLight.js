import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState();
	return (
		<div>
			<button
				className={`red ${color === "red" && "highlight"}`}
				onClick={() => setColor("red")}></button>
			<button
				className={`yellow ${color === "yellow" && "highlight"}`}
				onClick={() => setColor("yellow")}></button>
			<button
				className={`green ${color === "green" && "highlight"}`}
				onClick={() => setColor("green")}></button>
		</div>
	);
};

// Apply ternary to the rest of the buttons
// use the setColor function to update the color
