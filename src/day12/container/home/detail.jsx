import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        const { data } = this.state;
        const id = this.props.match.params.id;
        const newList = data.filter(item => {
            return item.id === parseInt(id)
        })
        return (
            <div className="detailData">
                {newList.length && (
                    <div>
                        <img src={newList[0].img} alt="" />
                        <h4>{newList[0].nm}</h4>
                        <p>买家评分:{newList[0].sc}</p>
                        <p>已购{newList[0].wish}件</p>
                        <p>价格：{newList[0].id}元</p>
                    </div>
                )
                }
            </div>
        );
    }

    componentDidMount() {
        this.getList();
    }
    getList = () => {
        axios.get('../mock/data.json')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })


    }
}

export default withRouter(Detail);