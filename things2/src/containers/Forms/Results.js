import React, { Component } from "react";
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import { connect } from "react-redux";

const Results = class extends Component {
	constructor(props) {
		super(props);
		this.state = { msg: ""};
	}
	componentWillReceiveProps(nextProps) {
		let msg = [];
		if (this.props.name !== nextProps.name) {
			msg.push(`name changed from ${this.props.name} to ${nextProps.name}`);
		}
		if (this.props.age !== nextProps.age) {
			msg.push(`age changed from ${this.props.age} to ${nextProps.age}`);
		}
		this.setState({msg: msg.join(", ")});
	}

	render() {
		const {name, age} = this.props;
		return (
			<LayoutWrapper>
				<Box>
					<p>message: {this.state.msg}</p>
					<p>Name: {name}</p>
					<p>Age: {age} </p>
				</Box>
		   </LayoutWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	const {name, age} = state.formObj;
	return {name, age};

};

export default connect(mapStateToProps)(Results);


