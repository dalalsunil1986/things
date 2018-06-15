import React, { Component } from 'react';
// import { Col, Row, Icon } from 'antd';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
// import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
// import Box from '../../components/utility/box';
// import Input from '../../components/uielements/input';

import PeopleTable from "./PeopleTable";

export default class extends Component {
  render() {
  	return (
      <LayoutWrapper>
        <PageHeader>
        	<IntlMessages id="People" />
        </PageHeader>

        <PeopleTable />

      </LayoutWrapper>
    );
  }
}
