import React, { Component } from 'react';
import { Col, Row } from 'antd';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
import Box from '../../components/utility/box';

import AddMessage from "./AddMessage";
import MessageList from "./MessageList";
import Sidebar from "./Sidebar";

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
        	<IntlMessages id="Chat" />
        </PageHeader>

        <Row justify="start" style={rowStyle}>

          <Col md={6} sm={6} xs={24} style={colStyle}>
            <Box title="Users">
              <ContentHolder>
                <Sidebar />
              </ContentHolder>
            </Box>
          </Col>

          <Col md={18} sm={18} xs={24} style={colStyle}>
            <Row>
              <Col>
                <Box title="Messages">
                  <ContentHolder>
                    <MessageList />
                  </ContentHolder>
                </Box>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box title="Message">
                  <ContentHolder>
                    <AddMessage />
                  </ContentHolder>
                </Box>
              </Col>
            </Row>

          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
