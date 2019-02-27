import React from 'react';
import RouteConfig from './config';
import RouteMap from './map';
class RouterView extends React.Component{
    render(){
        const {routes}=this.props;
        return (<RouteMap routes = {routes === undefined ? RouteConfig:routes} />)
    }
}
export default RouterView;