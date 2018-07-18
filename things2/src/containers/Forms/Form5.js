import React, { Component } from "react";
import FormWrapper from './FormWrapper';

import { Input } from 'antd';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';

import { connect } from "react-redux";
import { editForm } from "../../redux/form/actions";

const FormItem = Form.Item;

const Form5 = class extends Component {

	validateNumeric(rule, value, callback) {
		// const form = this.props.form;
		if (value && !isNaN(value)) {
			callback();
		} else {
			callback("Should be numeric!");
		}
	}

	handleSubmit(e) {
		const { edit } = this.props;
		const {validateFieldsAndScroll} = this.props.form;

		e.preventDefault();

		validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				edit(values);
			} else {
				console.info("Form not submitted due to errors:", err);
			}
		});

	}

	render() {
		const {name, age, color} = this.props;
		const { getFieldDecorator } = this.props.form;

	    const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 },
			},
	    };

		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 14,
					offset: 6,
				},
			},
		};
		return (
			<FormWrapper title="Fifth Form" color={color}>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<FormItem {...formItemLayout} label="Name:">
						{getFieldDecorator("name", {
							initialValue: name
						})(<Input name="name" />)}
					</FormItem>

					<FormItem {...formItemLayout} label="Age:">
						{getFieldDecorator("age", {
							rules: [
								{
									required: true,
									message: "Enter the age!"
								},
								{
									validator: this.validateNumeric
								}
							],
							initialValue: age
						})(<Input name="age" />)}
					</FormItem>

					<FormItem {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</FormItem>
				</Form>
			</FormWrapper>
		);
	}
};

const mapStateToProps = (state) => {
	const {name, age} = state.formObj;
	return {name, age};

};

const mapDispatchToProps = dispatch => {
	return {
		edit: data => dispatch(editForm(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Form5));
