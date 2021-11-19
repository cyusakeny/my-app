import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import reportWebVitals from './reportWebVitals';
import{createStore,applyMiddleware} from'redux';
import {Provider} from 'react-redux'
import reducer from './container/store/reducer';
import thunk from 'redux-thunk'
const store =createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
