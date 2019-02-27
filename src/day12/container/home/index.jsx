import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            flag: false,
            value: '',

        }
    }
    render() {
        const { data, value, flag } = this.state;
        return (
            <div className="home">
                <div className="ipt">
                    <p onClick={() => this.props.history.push('/input')}>
                        <input readOnly value={value} ref="ipt" type="text" name="" id="" placeholder="请搜索你要的商品" />
                    </p>
                    {flag ? <p className="btn">
                        <span onClick={this.handleClear} className="clear">×</span>
                        <span onClick={this.handleFind} className="right">√</span>
                    </p> : ''}
                </div>

                <div className=" listItem goodsList">
                    {
                        data && data.map((v, i) => {
                            return <dl onClick={() => this.jump(v, v.id)} key={i}>
                                <dd><img src={v.img} alt="" /></dd>
                                <dt>
                                    <h4>{v.nm}</h4>
                                    <p>买家评分:{v.sc}</p>
                                    <p>已购{v.wish}件</p>
                                    <p>价格：{v.id}元</p>
                                </dt>
                            </dl>
                        })
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getList();
        if (this.props.location.params) {
            this.setState({
                flag: true,
                value: this.props.location.params
            })
        //     if (this.props.location.params2 && this.props.location.params2.length) {
        //         this.setState({
        //             data: this.props.location.params2
        //         })
        //     }
        }
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.getList2();
    }
    getList = () => {
        axios.get('./mock/data2.json')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    getList2=()=>{
        if (this.props.location.params) {
            this.setState({
                flag: true,
                value: this.props.location.params
            })
            if (this.props.location.params2 && this.props.location.params2.length) {
                this.setState({
                    data: this.props.location.params2
                })
            }
        } 
    }
    jump = (v, id) => {
        this.props.history.push({ pathname: "/detail/" + id, params: v })
    }
    handleClear = () => {
        axios.get('./mock/data2.json')
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
        let { data, value } = this.state;
        let len = data.length;
        let arr = [];
        let reg = new RegExp(value)
        for (var i = 0; i < len; i++) {
            if (data[i].nm.match(reg)) {
                arr.push(data[i]);
                this.setState({
                    data: arr
                })
            }
        }
    }
}

export default Home;