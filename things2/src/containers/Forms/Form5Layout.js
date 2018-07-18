import React, { Component } from "react";
import Form5 from "./Form5";
import Results from "./Results";

const Form5Layout = class extends Component {
	render() {
		return (
			<div>
				<Form5 />
				<Form5 color="black" />
				<Results />
			</div>
		);
	}
}

export default Form5Layout;

