import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RequestContextProvider } from './contexts/RequestContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <RequestContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </RequestContextProvider>,
  document.getElementById('root')
);

