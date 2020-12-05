import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducers from './reducers/index';
import App from './components/App';

const reduxStore = createStore(reducers, applyMiddleware())

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.querySelector("#root")
);