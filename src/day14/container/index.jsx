import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouterView from '../router/index';
import Router from '../router/config';
import '../common/style.css';
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={Router.routers}/>
            </BrowserRouter>
        );
    }
}

export default Index;