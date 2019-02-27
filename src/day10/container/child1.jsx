import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouterView from '../router'
class Child1 extends Component {
    render() {
        let { routes } = this.props;
        return (
            <div className="child1">
                <p>
                    <span><Link to="/home/child1/one">child1-1</Link></span>
                    <span><Link to="/home/child1/two">child1-2</Link></span>
                </p>
                <div>
                    <RouterView routes={routes} />
                </div>
            </div>
        );
    }
}

export default Child1;