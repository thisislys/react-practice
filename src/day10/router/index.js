import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
class Router extends Component {
    render() {
        let {routes}=this.props;
        let redirect=routes&&routes.length&&routes.filter(item=>item.redirect);
        let redirectComp=redirect&&redirect.length&&redirect.map((v,i)=>(
            <Redirect from={v.path} to={v.redirect} key={i}/>
        ))
        return (
            <Switch>
                {
                    routes.length&&routes.map((v,i)=>{
                        if(v.component){
                          return  <Route path={v.path} component={(componentApi)=>{
                              console.log(componentApi)
                              return <v.component routes={v.children} {...componentApi}/>
                          }} key={i}/>
                        }
                    }).concat(redirectComp)
                }
            </Switch>
        );
    }
}

export default Router;