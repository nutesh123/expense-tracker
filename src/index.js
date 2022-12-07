import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom" 
import { Context } from './Components/Context/Context';
import { Provider } from 'react-redux';
import store from './store/StoreIndex'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}>
  <Context>
  < BrowserRouter>
<App />
</BrowserRouter>
</Context>
</Provider>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

