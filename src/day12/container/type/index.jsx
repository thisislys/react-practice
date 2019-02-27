import React, { Component } from 'react';
import axios from 'axios';
class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            flag: false,
            value: ''
        }
    }
    render() {
        let { flag, value, data } = this.state;
        return (<div className="type">
                <div className="ipt">
                    <input type="text" value={value} onChange={this.handleChange} name="" id="" placeholder="请搜索你要的商品" />
                    {flag ? <p className="btn">
                        <span onClick={this.handleClear} className="clear">×</span>
                        <span onClick={this.handleFind} className="right">√</span>
                    </p> : ''}
                </div>
                <p className="sort"><span onClick={this.handleRender1}>价格排序</span><span onClick={this.handleRender2}>好评排序</span></p>
                <div>
                    <h4>进口品牌</h4>
                    <div className="typeList">
                        {
                            data && data.length && data.map((v, i) => {
                                return <dl onClick={() => { this.props.history.push('/home') }} key={i}>
                                    <dd><img src="./img/img.jpg" alt="" /></dd>
                                    <dt>{v}</dt>
                                </dl>
                            })
                        }
                    </div>
                </div>
                <div>
                    <h4>常用分类</h4>
                    <div className="typeList">
                        {
                            data && data.length && data.map((v, i) => {
                                return <dl onClick={() => { this.props.history.push('/home') }} key={i}>
                                    <dd><img src="./img/img.jpg" alt="" /></dd>
                                    <dt>{v}</dt>
                                </dl>
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
    handleRender1=()=>{
        axios.get('./mock/type.json')
        .then((res) => {
            this.setState({
                data: res.data
            })
        })
    }
    handleRender2=()=>{
        axios.get('./mock/type2.json')
        .then((res) => {
            this.setState({
                data: res.data
            })
        })
    }
    componentDidMount() {
        this.getList();
    }
    getList = () => {
        axios.get('./mock/type.json')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
        axios.get('./mock/data2.json')
            .then((res) => {
                this.setState({
                    data2: res.data
                })
            })
    }
    handleChange = (e) => {
        if (e.target.value) {
            this.setState({
                flag: true,
                value: e.target.value
            })
        } else {
            axios.get('./mock/type.json')
                .then((res) => {
                    this.setState({
                        data: res.data
                    })
                })
        }
    }
    handleClear = () => {
        axios.get('./mock/type.json')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
        this.setState({
            value: ''
        })
    }
    handleFind = () => {
        console.log(111)
        let { data, value } = this.state;
        let len = data.length;
        let arr = [];
        let reg = new RegExp(value)
        for (var i = 0; i < len; i++) {
            if (data[i].match(reg)) {
                arr.push(data[i]);
                console.log(arr)
                this.setState({
                    data: arr
                })
            }
        }
        // setTimeout(() => {
        // this.props.history.push({
        //     pathname: '/home',
        //     params: value,
        //     params2: this.state.data
        // })
        // }, 100);

    }
}

export default Type;