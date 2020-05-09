import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { GoTProvider } from '../../hooks/GoTProvider';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(
      <GoTProvider>
        <App />
      </GoTProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
  
