import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouterView from '../../router/index';
class Index extends Component {
    render() {
        let { routes } = this.props;
        return (
            <div className="box">
                <RouterView routes={routes} />
                <footer>
                    <NavLink activeClassName="active" to="/app/hot" replace>热映</NavLink>
                    <NavLink activeClassName="active" to="/app/cinema" replace>影院</NavLink>
                    <NavLink activeClassName="active" to="/app/mine" replace>我的</NavLink>
                </footer>

            </div>
        );
    }
}

export default Index;