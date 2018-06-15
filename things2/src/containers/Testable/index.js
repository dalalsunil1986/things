import React, { Component } from 'react';
// import { Col, Row, Icon } from 'antd';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
// import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
// import Box from '../../components/utility/box';
// import Input from '../../components/uielements/input';

// import Card from "../../components/uielements/card";
// import Badge from "../../components/uielements/badge";

export default class extends Component {
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>
        	<IntlMessages id="Testable" />
        </PageHeader>

        Hey

      </LayoutWrapper>
    );
  }
}
