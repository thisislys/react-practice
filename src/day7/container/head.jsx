import React, { Component } from 'react';

class Head extends Component {
    render() {
        const {data,handleChange}=this.props;
        return (
            <div>
                {data&&data.map((v,i)=>(
                    <span onClick={()=>handleChange(i)} key={i}>{v}</span>
                ))}
            </div>
        );
    }
}

export default Head;