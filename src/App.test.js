import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

configure({adapter: new Adapter()});
test('replacing elements with new one should change the state', () => {

  const Component = shallow(<App />);
  const el = {id: 5, title: 'testElem', counter: {done: 0, planned: 1}, done: false};
  Component.setState({
    tasks: [el],
  });
  expect(Object.keys(Component.state('tasks')).length).toBe(1);
});
