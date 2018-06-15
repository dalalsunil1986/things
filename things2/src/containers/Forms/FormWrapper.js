import React, { Component } from "react";
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';

export default class extends Component {
	render() {
		return (
			<LayoutWrapper>
				<PageHeader>{this.props.title}</PageHeader>
				<Box>
					{this.props.children}
				</Box>
		   </LayoutWrapper>
		);
	}
}