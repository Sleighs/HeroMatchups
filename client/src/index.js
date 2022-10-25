import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RequestContextProvider } from './contexts/RequestContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <RequestContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </RequestContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

