import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorMessage from './index';

configure({ adapter: new Adapter() })

describe('ErrorMessage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ErrorMessage msgError='Error Message' />);
  
    expect(wrapper.text().includes('Error Message')).toEqual(true);
  });
});