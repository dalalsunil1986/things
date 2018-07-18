import React, { Component } from "react";
import FormWrapper from './FormWrapper';

import { Input } from 'antd';
import Form from '../../components/uielements/form';
import Button from '../../components/uielements/button';
import Alert from "../../components/feedback/alert";

import { connect } from "react-redux";
import { addPerson } from "../../redux/form/actionsPeople";

const FormItem = Form.Item;

const Form6AddEdit = class extends Component {

	validateNumeric(rule, value, callback) {
		// const form = this.props.form;
		if (value && !isNaN(value)) {
			callback();
		} else {
			callback("Should be numeric!");
		}
	}

	handleSubmit(e) {
		const { validateFieldsAndScroll } = this.props.form;
		const { addPerson } = this.props;

		e.preventDefault();

		validateFieldsAndScroll((err, values) => {
			if (!err) {
				addPerson(values);
			} else {
				console.info("Form not submitted due to errors:", err);
			}
		});

	}

	render() {
		const {name, age, error} = this.props;
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

		const errorMessage = error
			? (<FormItem {...formItemLayout} label="message"><Alert
				message={error}
				type="error"
				showIcon /></FormItem>)
			: null;

		return (
			<FormWrapper title="Add or Edit Person">
				<Form onSubmit={this.handleSubmit.bind(this)}>
					{ errorMessage }
					<FormItem {...formItemLayout} label="Id:">
						{getFieldDecorator("id", {
							initialValue: ""
						})(<Input name="id" />)}
					</FormItem>

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
	return state.People;
};

const mapDispatchToProps = dispatch => {
	return {
		addPerson: data => dispatch(addPerson(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Form6AddEdit));
