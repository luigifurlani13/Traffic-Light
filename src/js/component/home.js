import React from "react";
import { TrafficLight } from "./TrafficLight";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<div className="extension"></div>
			<div className="box">
				<TrafficLight />
			</div>
		</div>
	);
}
