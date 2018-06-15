import React, { Component } from "react";
import FormWrapper from './FormWrapper';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(key) {
		return (e) => {
			this.setState({
				[key]: e.target.value
			});
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		console.info(">> submitted:", this.state);
	}

	render() {
		return (
			<FormWrapper title="Third Form">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>
						Name:
						<input type="text" value={this.state.name} onChange={this.handleChange("name")} />
					</label>

					<label>
						Age:
						<input type="text" value={this.state.age} onChange={this.handleChange("age")} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</FormWrapper>
		);
	}
};