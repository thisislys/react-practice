import React, { Component } from 'react';
import {connect} from 'react-redux';
class Index extends Component {
    render() {
        let {data}=this.props.UpdateRender;
        console.log(data)
        return (
            <div>
                {
                    data&&data.length&&data.map((v,i)=>(
                        <ul key={i}>
                            <li>{v.name}</li>
                            <li>{v.age}</li>
                            <li>{v.add}</li>
                        </ul>
                    ))
                }
            </div>
        );
    }
}

export default connect((state)=>{
    return state
})(Index);