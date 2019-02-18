import React, { Component } from 'react';

class Grandson extends Component {
    render() {
        return (
            <div>
                <button onClick={this.changeParent}>点击我通过爷爷元素修改父亲的数据</button>
            </div>
        );
    }
    changeParent=()=>{
        this.props.changeParent('我是被子组件修改的')
    }
}

export default Grandson;