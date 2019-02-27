import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p onClick={()=>this.props.history.push('/child1')}>Child2</p>
            </div>
        );
    }
}

export default Child2;