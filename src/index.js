import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// ! Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MainReducer } from './Reducers/MainReducer';

const store = createStore(MainReducer);
console.log("Starting State: ", store.getState());
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));