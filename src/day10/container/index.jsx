import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import RouterView from '../router';
import '../common/style.css';
import Router from '../router/config';
class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className="box">
                    <RouterView routes={Router.routers} />
                    <footer>
                        <Link to="/home">首页</Link>
                        <Link to="/mine">我的</Link>
                    </footer>

                </div>
            </BrowserRouter>
        );
    }
}

export default Index;