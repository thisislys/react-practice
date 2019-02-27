import React, { Component } from 'react';
import List from './list';
import SetInfo from './setInfo';
let arr = [];
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            setInfo:{}
        }
    }

    render() {
        let { list,setInfo } = this.state;
        return (
            <div className="box">
                <SetInfo list={list} saveInfo={this.saveInfo} setInfo={setInfo}/>
                <List list={list} getInfo={this.getInfo} deleteInfo={this.deleteInfo} />
            </div>
        );
    }
    deleteInfo=(idx)=>{
        console.log(idx);
        let {list}=this.state;
        list.splice(idx,1)
        this.setState({
            list
        })
    }
    saveInfo = (obj) => {
        arr.push(obj)
        this.setState({
            list: arr
        })
    }
    getInfo = (val) => {
        this.setState({
            setInfo:val
        })
    }
}

export default Index;