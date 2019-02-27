import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Router from '../router/index.js';
import Config from '../router/config.js';
import '../common/style.css';
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div><Router routes={Config.routers} /></div>
                    <footer>
                        <NavLink to="/home">主页</NavLink>
                        <NavLink to="/type">分类</NavLink>
                        <NavLink to="/mine">我的</NavLink>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}
export default Index;