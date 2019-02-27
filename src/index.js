import React from 'react';
import ReactDOM from 'react-dom';
import App from './day13/container/index.jsx';
import {Provider} from 'react-redux';
import Store from './day13/store';
// import './day8_1/common/style.css';
// import App from './day7_1/view/home';
// import data from './day7_1/data/data';
ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

