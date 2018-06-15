import React, {Component} from "react";

export default class extends Component {
	handleSubmit(e) {
		e.preventDefault();
		console.info(">> submitted:");
		console.info(">>  by index: ", e.target[0].value);
		console.info(">>  by name:  ", e.target.name.value);
		console.info(">>  by ref:   ", this.refs.nameRef.value);

	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					Name:
					<input type="text" name="name" ref="nameRef" />
				</label>
				<label>
					Age:
					<input type="text" name="age" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
};
