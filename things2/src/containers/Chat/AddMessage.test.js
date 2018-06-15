import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AddMessage from './AddMessage'
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const setup = () => {
	const props = {
		users: [],
		addUser: jest.fn()
	};
	Enzyme.configure({ adapter: new Adapter() });
	const enzymeWrapper = mount(<Provider store={store}><AddMessage {...props} /></Provider>);

	return {
		props,
		enzymeWrapper
	};
};

describe("AddMessage", () => {
	it("Should render", () => {
		const { enzymeWrapper } = setup();
		expect(enzymeWrapper.find("section#new-message").length).toBe(1);
	});
});

