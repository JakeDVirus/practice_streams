import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk'
import { Provider } from "react-redux";

import reducers from './reducers/index';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App/>
  </Provider>,
  document.querySelector("#root")
);