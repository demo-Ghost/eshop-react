import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './app';

// Main entry point for any Bootstrap 4 or Sass styles
import './styles/main.scss';


const title = 'React Starter';

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,
  document.getElementById('app')
);