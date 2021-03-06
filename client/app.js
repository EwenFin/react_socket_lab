import React from 'react';
import ReactDOM from 'react-dom';
import CanvasContainer from './containers/CanvasContainer';

window.onload = () => {
  ReactDOM.render(
    <CanvasContainer />,
    document.getElementById('app')
  );
};