import React from 'react';
import ReactDOM from 'react-dom';
import CardRowData from './CardRowData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardRowData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
