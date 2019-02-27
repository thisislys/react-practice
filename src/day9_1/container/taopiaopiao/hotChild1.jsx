import React, { Component } from 'react';
import axios from 'axios';
class HotChild1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        const { data } = this.state;
        return (
            <div className="listItem">
                {data&&data.map((v,i)=>{
                    return <dl onClick={()=>this.jump(v,v.id)} key={i}>
                        <dd><img src={v.img} alt=""/></dd>
                        <dt><h4>{v.nm}</h4><p>淘票票评分:{v.sc}</p>
                        <p>主演:{v.star}</p>
                        <p>{v.showInfo}</p></dt>
                    </dl>
                })}
            </div>
        );
    }
    componentDidMount() {
       this.getList();
    }
    getList=()=>{
        axios.get('./mock/data.json')
        .then((res) => {
            this.setState({
                data: res.data
            })
        })
    }
    jump=(v,id)=>{
        this.props.history.push({pathname:"/detail/"+id,params:v})
    }
}

export default HotChild1;
