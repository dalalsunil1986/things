import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
import Box from '../../components/utility/box';
import Input from '../../components/uielements/input';

// import Card from "../../components/uielements/card";
// import Badge from "../../components/uielements/badge";

export default class extends Component {
  render() {
  	const rowStyle = {
  		width: "100%",
  		display: "flex",
  		flexFlow: "row wrap",
  	};
  	const colStyle = {
  		marginBottom: "16px"
  	};
    return (
      <LayoutWrapper>
        <PageHeader>
        	<IntlMessages id="Mabel" />
        </PageHeader>

        <Row justify="start" style={rowStyle}>
        	<Col md={12} sm={12} xs={24} style={colStyle}>
        		<Box title="box title" subtitle="box subtitle">
        			<ContentHolder>
        				<Input placeholder="Basic Usage" addonBefore={<Icon type="edit" />} />
        			</ContentHolder>
        		</Box>
        	</Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
