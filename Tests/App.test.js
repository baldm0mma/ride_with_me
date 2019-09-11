import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

jest.mock('react-native-gesture-handler', () => {
  return {};
});

describe('App', () => {
  let wrapper;
  let instance;
  let props;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
