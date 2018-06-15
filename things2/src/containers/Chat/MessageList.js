import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Message from "./Message";

const MessageListComponent = ({messages}) => (
	<section id="message-list">
		<ul>
			{messages.map(message => (
				<Message key={message.id} {...message} />
			))}
		</ul>
	</section>
);

MessageListComponent.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		})
	).isRequired
};

export default connect(state => ({messages: state.messages}), {})(MessageListComponent);
