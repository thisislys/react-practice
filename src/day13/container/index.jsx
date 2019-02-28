import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../common/style/style.css';
import axios from 'axios';
import Cons from './cons';
class Index extends Component {
    render() {
        return (
            <div className="wrap">
                <Cons />
            </div>
        );
    }
    componentDidMount() {
        let { updata } = this.props;
        axios('./mock/dynamic.json').then(res => {
            updata(res.data);
        })
        
    }
}
let mapStateToProps = (state) => {
    return state.UpdateRender
}
let mapDispatchToProps = (dispatch) => {
    return {
        updata(payload) {
            dispatch({ type: 'UPDATA', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);