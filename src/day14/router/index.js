import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
class RouterView extends Component {
    render() {
        let {routes}=this.props;
        let redirectDom=routes&&routes.length&&routes.filter(item=>item.redirect);
        let renderRedirect=redirectDom&&redirectDom.length&&redirectDom.map((v,i)=>(
            <Redirect from={v.path}  to={v.redirect} key={i}/>
        ))
        return (
            <Switch>
                {
                   routes&&routes.length&&routes.map((v,i)=>{
                       if(v.component){
                           return <Route path={v.path} component={(childrenApi)=>{
                                return <v.component {...childrenApi} routes={v.children}/>
                           }} key={i}/>
                       }
                   }).concat(renderRedirect)
                }
            </Switch>
        );
    }
}

export default RouterView;