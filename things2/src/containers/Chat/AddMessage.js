import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addMessage } from "../../redux/chat/actions";
const AddMessageComponent = (props) => {
	let input;

	return (
		<section id="new-message">
			<input onKeyPress={(e) => {
				console.info(">>>>>", e.key);
				if (e.key === "Enter") {
					console.info("???", input.value);
					props.dispatch(input.value, "Me");
					input.value = "";
				}
			}}
			type="text"
			ref={(node) => {
				input = node;
			}}
			/>
		</section>
	);
};

AddMessageComponent.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	dispatch: (message, author) => {
		dispatch(addMessage(message, author))
	}
});

export default connect(() => ({}), mapDispatchToProps)(AddMessageComponent);
