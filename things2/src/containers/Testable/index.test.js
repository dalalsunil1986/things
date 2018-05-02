import Testable from './index.js';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Testable />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(<Testable />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
