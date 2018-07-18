import React, { Component } from "react";
import FormWrapper from './FormWrapper';
import { Table } from "antd";
import Spins from '../../components/uielements/spin';
import Button from '../../components/uielements/button';
import Popconfirms from '../../components/feedback/popconfirm';


import { withRouter } from 'react-router-dom'

import { connect } from "react-redux";
import { fetchPeople, deletePerson } from "../../redux/form/actionsPeople";

const Form6List = class extends Component {

	componentDidMount() {
		const { loaded } = this.props;

		// const { fetchPeople } = this.props;
		// if ( ! loaded) {
		// 	fetchPeople()
		// }

		if ( ! loaded) {
			this.props.dispatch(fetchPeople());
		}
	}

	delete(id) {
		// const { deletePerson } = this.props;
		// deletePerson(id);

		// this.props.dispatch(deletePerson(id)).then(() => {console.info(">> deleted.")});
		this.props.dispatch(deletePerson(id));
	}

	render() {
		const { people, loading } = this.props;

		const actionRender = (text, record) => {
			return <span>
				<Popconfirms title="Are you sure" onConfirm={() => this.delete(record.id)}>
					<Button>Delete</Button>
				</Popconfirms>
			</span>;
		};

		const columns = [
			{ title: "id", dataIndex: "id", key: "id" },
			{ title: "name", dataIndex: "name", key: "name" },
			{ title: "age", dataIndex: "age", key: "age" },
			{ title: "action", key: "action", render: actionRender }
		];

		const margin = {
			margin: "0 8px 8px 0"
		};


		const AddButton = withRouter(({ history }) => (
			<Button
	                  type="primary"
	                  icon="plus"
	                  size="default"
	                  style={margin}
				onClick={() => { history.push('/dashboard/forms/form6/add') }}
			>
				Add Person
			</Button>
		));

		const contents = <div>
			<AddButton />
			<Table columns={columns} dataSource={people} rowKey="id"/>
		</div>;

		return (
			<FormWrapper title="People:">
				{loading ? <Spins size="large">loading...</Spins> : contents}
			</FormWrapper>
		);
	}
};

const mapStateToProps = (state) => {
	return { people: state.People.items, loading: state.People.loading, loaded: state.People.loaded };
};

export default connect(mapStateToProps)(Form6List);


// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchPeople: data => dispatch(fetchPeople(data)),
// 		deletePerson: data => dispatch(deletePerson(data)),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form6List);
