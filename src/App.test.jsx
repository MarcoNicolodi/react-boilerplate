import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should match snapshot', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('should display a greating to the user', () => {
    const app = shallow(<App />);
    expect(app.find('h1').text()).toEqual('Hello World!');
  });
});
