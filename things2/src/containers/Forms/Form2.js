import React, { Component } from "react";
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
	}

	handleChangeName(e) {
		console.info(">> ", e.target.value);
		this.setState({
			name: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.info(">> submitted:", this.state);
	}

	render() {
		return (
			<LayoutWrapper>
				<PageHeader> Second Form </PageHeader>
				<Box>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<label>
							Name:
							<input type="text" value={this.state.value} onChange={this.handleChangeName} />
						</label>

						<label>
							Age:
							<input type="text" name="age" />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</Box>
		   </LayoutWrapper>
		);
	}
};