import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './component/css/App.css';
import { BrowserRouter} from "react-router-dom";
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

unregisterServiceWorker();
