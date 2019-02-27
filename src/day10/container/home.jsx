import React, { Component } from 'react';
import RouterView from '../router';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        let { routes } = this.props;
        return (
            <div className="home">
                <div className="left">
                    <ul>
                        <li><Link to="/home/child1">index1</Link></li>
                        <li><Link to="/home/child2">index2</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <RouterView routes={routes} />
                </div>
            </div>
        );
    }
}

export default Home;