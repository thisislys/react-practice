import React, { Component } from 'react';
import { BrowserRouter, Route ,Redirect} from "react-router-dom";
import Child1 from './child1';
import Child2 from './child2';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iptVal: "默认值"
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" render={()=><Redirect to="/child2"/>}  exact />
                    <Route path="/child1"  component={Child1}/>
                    <Route path="/child2" component={this.handleRoute}/>
                    {/* <div>
                        <input value={this.state.iptVal} type="text" onChange={this.handleChange} name="" id="" />
                        <input defaultValue={this.state.iptVal} type="text" name="" id="" />
                    </div> */}
                </div>

            </BrowserRouter>
        );
    }
    handleChange = (e) => {
        this.setState({
            iptVal: e.target.value
        })
    }
    handleRoute=(route)=>{
        console.log(route.match)
        return [<Route path={`${route.match.url}`} component={Child2} key="1" exact/>,
            <Route path={`${route.match.url}/list/:id`} component={Child1} key="2" />]
        
    }
   
}

export default Index;