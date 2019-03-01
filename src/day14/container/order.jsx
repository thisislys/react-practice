import React, { Component } from 'react';
import { connect } from 'react-redux';
class Order extends Component {

    render() {
        console.log(this.props.list)
        return (
            <div>
                <p onClick={() => { this.handleMinus() }}>从高到低</p>
                <p onClick={() => { this.handlePlus() }}>从低到高</p>
            </div>
        );
    }
    handleMinus = () => {
        this.props.list.forEach((v,i)=>{
console.log(v)
        })
        this.props.history.push('/buyCar/content')
    }
    handlePlus = () => {
        this.props.history.push('/buyCar/content')
    }


}

const mapStateToProps = (state) => {
    return state.List;
}
const mapDispatchToProps = (dispatch) => {
    return {
        updata(payload) {
            dispatch({ type: 'UPDATA', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);