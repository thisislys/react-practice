import React, { Component } from 'react'
import {connect} from '../utils/connect';
class Index extends Component {
    render () {
       console.log(this.props) // index对应的数据
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
export default connect((state)=>state["indexData"])(Index)