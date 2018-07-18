import React, { Component } from "react";
import FormWrapper from './FormWrapper';

import { connect } from "react-redux";
import { editForm } from "../../redux/form/actions";

const Form4 = class extends Component {

	handleSubmit(e) {
		const { edit } = this.props;
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			age: e.target.age.value
		};
		console.info(">> going to submit", data);
		edit(data);
	}

	render() {
		const {name, age, failed} = this.props;
		return (
			<FormWrapper title="Third Form">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>
						Name:
						<input type="text" name="name" defaultValue={name} />
					</label>

					<label>
						Age:
						<input type="text" name="age" defaultValue={age} />
					</label>
					<input type="submit" value="Submit" />
				</form>
				{failed ? <p>Can't submit</p> : null}
			</FormWrapper>
		);
	}
};

const mapStateToProps = (state) => {
	const {name, age, failed} = state.formObj;
	return {name, age, failed};

};

const mapDispatchToProps = dispatch => {
	return {
		edit: data => dispatch(editForm(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form4);
