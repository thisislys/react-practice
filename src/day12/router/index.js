import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
class Router extends Component {
    render() {
        let {routes}=this.props;
        let redirects=routes&&routes.length&&routes.filter(item=>item.redirect);
        let redirectRender=redirects&&redirects.length&&redirects.map((v,i)=>(
            <Redirect from={v.path} to={v.redirect} key={i}/>
        ))
        return (
            <Switch>
                {
                    routes&&routes.length&&routes.map((v,i)=>{
                        if(v.component){
                            return  <Route path={v.path} component={(compApi)=>{
                              return  <v.component routes={v.children} {...compApi}/>
                            }} key={i}/>
                        }
                    }).concat(redirectRender)
                }
            </Switch>
        );
    }
}

export default Router;