import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../../router/index';
class Hot extends Component {
    render() {
        let { routes } = this.props;
        return (
            <div className="body">
                <nav>
                    <NavLink activeClassName="active" to="/app/hot/hotChild1" replace>正在热映</NavLink>
                    <NavLink activeClassName="active" to="/app/hot/hotChild2" replace>即将热映</NavLink>
                </nav>
                <RouterView routes={routes} />
            </div>
        );
    }
}

export default Hot;