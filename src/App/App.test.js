import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('renders welcome message', () => {
  // mocking fetch data to make sure the component loads
  fetch.mockResponse(JSON.stringify([]));

  const wrapper = shallow(<App />);
  const logo = <img src="/logo.jpg" alt="" />;
  expect(wrapper.contains(logo)).toEqual(true);
});
