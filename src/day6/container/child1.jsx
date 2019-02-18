import React, { Component } from 'react';
import Grandson from './grandson';
class Child extends Component {
    render() {
        return (
            <div>
                {this.props.data}
                <br/>
                <button onClick={this.changeSelf}>点击我更改本身的数据</button>
                <Grandson changeParent={this.props.changeSelf}/>
            </div>
        );
    }
    changeSelf=()=>{
        this.props.changeSelf('我是被本身组件修改的')
    }
}

export default Child;