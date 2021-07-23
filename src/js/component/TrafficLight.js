import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");
	return (
		<div>
			<button
				className={`red ${color === "red" && "highlight"}`}
				onClick={() => setColor()}>
				{" "}
				CLick Me{" "}
			</button>
			<button className="yellow" onClick={() => setColor()}>
				{" "}
				Click Me{" "}
			</button>
			<button className="green" onClick={() => setColor()}>
				{" "}
				Click Me{" "}
			</button>
		</div>
	);
};

// Apply ternary to the rest of the buttons
// use the setColor function to update the color
