import React from 'react';
import { shallow, configure  } from 'enzyme'
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe("App  Component", () => {
  it('App should render without crashing', () => {
    const component = shallow(<App />);
    console.log(component.debug());
    const wrapper = component.find('button');
    expect(wrapper.length).toBe(1);
  })
})