import React, { Component } from 'react';
import { connect } from 'react-redux';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careFloag: false,
            praiseFloag: false,
            data: {},
            sum: 2
        }
    }
    render() {
        let len = Object.keys(this.props.data).length;
        const data = this.props.data;
        let {sum}=this.state
        // console.log(data)
        // let sum=data.replyCons.length;
        let { careFloag, praiseFloag } = this.state;
        return (
            <div className="box">
                <p>8条回复</p>
                {
                    len ? (
                        <div>
                            <p className="name"><span>{data.name}</span><span onClick={() => {
                                this.setState({
                                    careFloag: !this.state.careFloag
                                })
                            }}>{careFloag ? '已关注' : '+加关注'}</span></p>
                            <p className="cons">{data.cons}</p>
                            <p className="else"><span>回复：{data.reply}</span><span className={praiseFloag ? 'active' : ''} onClick={() => this.handlePraise(data)}>点赞:{data.praise}</span></p>
                            {
                                data.replyCons ? data.replyCons.map((v, i) => (
                                    <div key={i}>
                                        <p className="names">{v.name}</p>
                                        <p className="cons">{v.cons}</p>
                                        <p className="else"><span>回复：{v.reply}</span><span className={v.praiseFloag ? 'active' : ''} onClick={() => this.handlePraises(i)}>点赞:{v.praise}</span><span onClick={() => this.handleDel(i)}>删除</span></p>
                                    </div>
                                )) : ''
                            }
                        </div>
                    ) : ''
                }
                <div className="comment"><input type="text" ref="ipt" placeholder="我也有话说" /><span>评论：{sum}</span><button onClick={() => this.handleAdd()}>点击评论</button></div>
            </div>
        );
    }
    // 点赞
    handlePraise = (count) => {
        let { praiseFloag } = this.state;
        this.setState({
            praiseFloag: !praiseFloag
        })
        praiseFloag ? --count.praise : ++count.praise;
    }
    handlePraises = (i) => {
        let { data, updata } = this.props;
        console.log(data.replyCons[i].praiseFloag, i)
        data.replyCons[i].praiseFloag = !data.replyCons[i].praiseFloag;
        data.replyCons[i].praiseFloag ? ++data.replyCons[i].praise : --data.replyCons[i].praise;
        updata(data)
    }
    // 删除
    handleDel = (i) => {
        let { data, updata } = this.props;
        let dataItems = data.replyCons;
        dataItems.splice(i, 1);
        this.setState({
            sum: dataItems.length
        })
        updata(data)
    }
    //添加评论
    handleAdd = () => {
        let { data, updata } = this.props;
        let newData = [...data.replyCons, {
            "name": "我",
            "cons": this.refs.ipt.value,
            "reply": 23,
            "praise": 32,
            "praiseFloag": false
        }]
        data.replyCons = newData;
        this.setState({
            sum: newData.length
        })
        updata(data)
        this.refs.ipt.value = '';

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