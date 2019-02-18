import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.changeBrother('我是被兄弟修改的')}>点击我通过父组件更改兄弟组件的数据</button>
            </div>
        );
    }
}

export default Child2;