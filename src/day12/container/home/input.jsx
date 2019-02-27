import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            value:''
        }
    }

    render() {
        let {flag,value}=this.state;
        return (
            <div className="ipt">
                <input type="text" value={value} onChange={this.handleChange} name="" id="" placeholder="请搜索你要的商品" />
                {flag?<p className="btn">
                    <span onClick={this.handleClear} className="clear">×</span>
                    <span onClick={this.handleBack} className="right">√</span>
                </p>:''}
            </div>
        );
    }
    handleChange = (e) => {
        if (e.target.value) {
            this.setState({
                flag: true,
                value:e.target.value
            })
        }
    }
    handleClear=()=>{
        this.setState({
            value:''
        })
    }
    handleBack=()=>{
        this.props.history.push({
            params:this.state.value,
            pathname:'/home'
        })
        // this.props.history.goBack()
    }
}

export default Input;