import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

//webpack split the css from js, make a seperate css file
import './index.css';

//first arg: virtual dom/component
// second arg: real dom container

// Virtual dom ====> REAL DOM

ReactDOM.render(<App />,
                document.getElementById('root'));