import React, { Component } from 'react';
import axios from 'axios';
let arr2;
let arr1;
class Cinema extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: []
        }
    }
    render() {
        const { data, search } = this.state;
        console.log(data)
        return (
            <div className="cinema">
                <h3>影院</h3>
                <div className="search">
                    <input type="text" onChange={this.handleChange} ref="search" placeholder="搜影院" />
                    <button onClick={this.handleSearch}>点击搜索</button>
                </div>
                <div className="sort"><span onClick={this.handleDistance}>离我最近</span><span onClick={this.handleMoney}>价钱最低</span></div>
                <div className="cinameList">
                    {data && data.length && data.map(v => (
                        <div key={v.id}>
                            <h4>{v.nm}</h4>
                            <p>地址：{v.addr}</p>
                            <p>距离：{v.distance}</p>
                            <p>人均：{v.sellPrice}</p>
                        </div>
                    ))}
                </div>
                <ul className="searchList">{
                    search && search.length ? search.map((v, i) => (
                        <li key={i}>{v.nm}</li>
                    )) : ''
                }

                </ul>
            </div>
        );
    }
    componentDidMount() {
        this.getList();
    }
    getList = () => {
        axios.get('./mock/cinema.json')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    handleChange = (e) => {
        if (!e.target.value) {
            (this.setState({
                search: []
            }))
        }
    }
    handleSearch = () => {
        let { data } = this.state;
        let word = this.refs.search.value;
        let len = data.length;
        let arr = [];
        let reg = new RegExp(word);
        for (var i = 0; i < len; i++) {
            if (data[i].nm.match(reg)) {
                arr.push(data[i]);
                this.setState({
                    search: arr
                })
            }
        }
    }
    handleDistance = () => {
        const { data } = this.state;
        arr1=data;
        arr1.sort(this.sortDistance)
        console.log(arr1)
        this.setState({
            data:arr1
        })
    }
    sortDistance(a, b) {
        return a.distance - b.distance
    }
    handleMoney = () => {
        const { data } = this.state;
        arr2=data;
        arr2.sort(this.sortMoney)
        console.log(arr2)
        this.setState({
            data:arr2
        })
    }
    sortMoney(a, b) {
        return a.sellPrice - b.sellPrice
    }
}

export default Cinema;