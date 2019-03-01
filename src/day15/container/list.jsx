import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../mock/mock';
class List extends Component {
    constructor() {
        super();
        this.state = {
            sum: 0,
            total: 0
        }
    }

    render() {
        const { list, updata } = this.props;
        return (
            <div>
                <div className="list">
                    <p>
                        <input id="allIpt" ref="all" className="allIpt" type="checkbox" onChange={(e) => {
                            list.forEach(item => {
                                item.isCheck = e.target.checked;
                            })
                            this.handleCheck()
                            this.computed();

                            updata(list);
                        }} />
                        <label htmlFor="allIpt">全选/反选</label>
                    </p>

                    {list && list.length && list.map((v, i) => (
                        <div className="goods" key={i}>
                            <input className="ipt" type="checkbox" onChange={(e) => {
                                list[i].isCheck = e.target.checked;
                                this.handleCheck()
                                this.computed();
                                updata(list);
                            }} checked={v.isCheck} />
                            <dl>
                                <dd>
                                    <span>我是图片</span>
                                </dd>
                                <dt>
                                    <p>{v.name}</p>
                                    <p>价格：{v.money}￥</p>
                                    <div className="comp">
                                        <b onClick={() => this.handleMinus(i)}>-</b>
                                        <b>{v.num}</b>
                                        <b onClick={() => this.handlePlus(i)}>+</b>
                                    </div>
                                </dt>
                            </dl>
                        </div>

                    ))}
                </div>
                <div className="sum">
                    <span>总价：{this.state.sum}</span>
                    <span>总件数：{this.state.num}</span>
                </div></div>
        );
    }
    handleCheck = () => {
        const { list, updata } = this.props;
        let listCheck = list.filter(v => v.isCheck);
        if (listCheck.length === 4) {
            return this.refs.all.checked = true
        }
        list.forEach((v, i) => {
            if (!v.isCheck) {
                return this.refs.all.checked = false;
            }
        })
    }
    componentDidMount() {
        let { updata } = this.props
        axios.get('/shopCar').then(res => {
            updata(res.data.data)
        })
        this.handleCheck()
        this.computed();
    }
    handleMinus = (i) => {
        const { list, updata } = this.props;
        if (list[i].num < 1) return;
        list[i].num--;
        this.handleCheck()
        this.computed();
        updata(list)

    }
    handlePlus = (i) => {
        const { list, updata } = this.props;
        if (list[i].num > 9) return;
        list[i].num++;
        this.computed();
        updata(list)

    }
    computed() {
        let { list } = this.props;
        let sum = 0, num = 0;
        list.forEach(item => {
            if (item.isCheck) {
                sum += item.num * item.money;
                num += item.num
            }
        })
        this.setState({
            sum, num
        })
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
export default connect(mapStateToProps, mapDispatchToProps)(List);