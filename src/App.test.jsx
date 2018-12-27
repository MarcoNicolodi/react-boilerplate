import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should match snapshot', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('should display a greating to the user', () => {
    const app = mount(<App />);
    expect(app.find('h2').text()).toEqual('Make wonderful things!');
  });
});
