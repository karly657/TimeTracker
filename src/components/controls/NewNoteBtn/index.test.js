import React from 'react';
import { shallow } from 'enzyme';
import NewNoteBtn from './component';

describe('New note button', () => {
  it('renders link', () => {
    const wrapper = shallow(<NewNoteBtn />);
    expect(wrapper.last().text()).toEqual('<Link />')
  })
});