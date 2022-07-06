import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import {InputsStore as inputsStore} from './stores/InputsStore'
import reportWebVitals from './reportWebVitals';

const InputsStore = new inputsStore()
const stores = {
    InputsStore
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider {... stores}>
      <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
