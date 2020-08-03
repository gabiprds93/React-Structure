import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withError from './index';

configure({ adapter: new Adapter() })

describe('ErrorBoundary', () => {
  let WithErrorComponent: any;

  it('error message component when have some error', () => {
    const MockedComponent = () => {
      throw 'error';
    }
    WithErrorComponent = withError(MockedComponent);
    const wrapper = mount(<WithErrorComponent />);
    expect(wrapper.find('#errorMessage').length).toEqual(1);
  });

  it('component when have no error', () => {
    const MockedComponent = () => {
      return <div></div>;
    }
    WithErrorComponent = withError(MockedComponent);
    const wrapper = mount(<WithErrorComponent />);
    expect(wrapper.find('#component').length).toEqual(1);
  });
});