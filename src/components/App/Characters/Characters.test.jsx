import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders Characters', () => {
    const wrapper = shallow(<Characters characters={[
      {
        url: 'www.me.com',
        name: 'Jon',
        culture: 'Dothraki',
        titles: ['king', 'idiot'],
        aliases: ['hey you', 'that guy']  
      },
      {
        url: 'www.me.com',
        name: 'Raven-Eyes',
        culture: 'Teen',
        titles: ['king', 'three-eyed raven'],
        aliases: ['why', 'ugh']  
      }

    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
