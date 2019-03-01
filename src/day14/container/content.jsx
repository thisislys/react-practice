import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../mock/carClass';
class BuyCar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         carList: []
    //     }
    // }

    render() {
        let {list}=this.props;
        console.log(list)
        return (
            <div className="box">
                <p onClick={() => {
                    this.props.history.push('/buyCar/order')
                }}>排序</p>
                <div>
                    {
                        list.length && list.map(v => {
                       return v.map((item,i) => {
                            return (<div key={i}>
                                <p className="carClass">{item.carClass}</p>
                                <ul>
                                    {
                                      item.carList.map((val,idx)=>{
                                          return (
                                               <li key={idx}><span>{val.carName}</span><span>{val.price}</span></li>
                                          )
                                      })
                                    }
                                   
                                </ul>
                            </div>)
                        }
                        )
                    })
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.carData()
    }
    carData() {
    let {updata}=this.props;
        axios.get('/carList').then(res => {
            updata(res.data.data)
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
export default connect(mapStateToProps,mapDispatchToProps)(BuyCar);