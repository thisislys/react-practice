import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

class RouteMap extends Component {
    render() {
        const {routes}=this.props;
        const defaultRoute=<Route path='/' component={()=>{
            return <Redirect to="/app/hot/hotChild1"></Redirect>
        }} key={'redirect'} exact/>
        return <Switch>
                    {
                        routes.map((item,index)=>{
                            const Comp=item.component;
                            return <Route path={item.path} component={(apiRouter)=>{
                                return (<Comp routes={item.children} {...apiRouter}></Comp>)
                            }} key={index}/>
                        }).concat([defaultRoute])
                    }
                </Switch>
    }
}
export default RouteMap;