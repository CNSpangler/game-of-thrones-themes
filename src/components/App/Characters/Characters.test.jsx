import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<Characters />);
    expect(wrapper).toMatchSnapshot();
  });
});
