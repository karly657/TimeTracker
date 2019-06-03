import React from 'react';
import { shallow } from 'enzyme';
import Note from './component';

describe('Note', () => {
  it('empty render', () => {
    const props = {
      notes: []
    }
    const wrapper = shallow(<Note {...props}/>);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('should render div with .green-bg', () => {
    const props = {
      notes: [{date: '01.01.2019', hours: 2}],
      day: '01.01.2019'
    }
    const wrapper = shallow(<Note {...props}/>);
    expect(wrapper.find('.pt-5.green-bg').length).toEqual(1);
  })

  it('should render div with .red-bg', () => {
    const props = {
      notes: [{date: '01.01.2019', hours: 9}],
      day: '01.01.2019'
    }
    const wrapper = shallow(<Note {...props}/>);
    expect(wrapper.find('.pt-5.red-bg').length).toEqual(1);
  })
});