import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';
import { GoTProvider } from '../../hooks/GoTProvider';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(
      <GoTProvider>
        <Character />
      </GoTProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
