import React, { Component } from 'react';
// import Form from '../../components/uielements/form';
// import Input from '../../components/uielements/input';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import IntlMessages from '../../components/utility/intlMessages';
// import FormValidation from './FormValidation';

import PersonForm from "./PersonForm";

// const FormItem = Form.Item;

export default class extends Component {
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>
          {<IntlMessages id="Person's info" />}
        </PageHeader>
        <Box>
			<PersonForm />
        </Box>
      </LayoutWrapper>
    );
  }
}