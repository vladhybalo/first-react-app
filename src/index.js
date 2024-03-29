import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
