import React, { Component } from 'react';
import Child from './child1';
import Child2 from './child2';
import Context from '../common/context';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:'我是子组件中要显示的数据'
        }
    }
    
    render() {
        return (
            <div>
                <Context.Provider value={{data:this.state.data,changeChild:this.changeContext}}>
                    <Child data={this.state.data} changeSelf={this.changeData}/>
                    <Child2 changeBrother={this.changeData}/>
                    <button onClick={this.changeChild}>点击我更改子元素中的数据</button>
                </Context.Provider>
            </div>
        );
    }
    changeChild=()=>{
        this.setState({
            data:'我是被父组件修改的'
        })
    }
    changeContext=()=>{
        this.setState({
            data:'我是通过context修改的'
        })
    }
    changeData=(data)=>{
        this.setState({
            data
        })
    }
}

export default Index;