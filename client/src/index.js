import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RequestContextProvider } from './contexts/RequestContext';

ReactDOM.render(
  <React.StrictMode>
    <RequestContextProvider>
      <App />
    </RequestContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

