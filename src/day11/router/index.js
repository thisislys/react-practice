import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
class Index extends Component {
    render() {
        let {routes}=this.props;
        let redirects=routes&&routes.length&&routes.filter(v=>v.redirect);
        let renderRed=redirects&&redirects.map((v,i)=>(
            <Redirect from={v.path} to={v.redirect} key={i}/>
        ))
        return (
            <Switch>
                {routes&&routes.length&&routes.map((v,i)=>{
                    if(v.component){
                        return <Route path={v.path} component={(childApi)=>{
                           return <v.component routes={v.child} {...childApi}/>
                        }} key={i}/>
                    }
                }).concat(renderRed)}
            </Switch>
        );
    }
}
export default Index;