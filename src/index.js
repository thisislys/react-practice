import React from 'react';
import ReactDOM from 'react-dom';
import App from './day15/container/index.jsx';
import {Provider} from 'react-redux';
import {store} from './day15/store';
// import App from './day7_1/view/home';
// import data from './day7_1/data/data';
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
// ReactDOM.render(
//         <App/>,
//     document.getElementById('root')
// );

