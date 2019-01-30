import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

//webpack split the css from js, make a seperate css file
import './index.css';

import configureStore from './app/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

//first arg: virtual dom/component
// second arg: real dom container

// Virtual dom ====> REAL DOM

// expose store as context variable for containers
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                ,
                document.getElementById('root'));