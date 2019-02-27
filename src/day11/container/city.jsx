import React, { Component } from 'react';

class City extends Component {
    render() {
        const { city } = this.props;
        return (
            <div>
                {
                    city && Object.keys(city).map(v => (
                        <div key={v} className="myCity">
                            <h4>{v}</h4>
                            {
                                 city[v].map((item,i)=>{
                                   return  <span onClick={()=>this.handleChange(item.name)} key={i} className="city">{item.name}</span>
                                 })
                            } 
                        </div>
                    ))
                }
            </div>
        );
       
    }
    handleChange=(item)=>{
        const { handleClick } = this.props;
        const spans=document.querySelectorAll('.myCity>span');
        // spans.forEach((v,i)=>{
            
        //     console.log(v.firstChild)
        // })
        // spans[item].classList.add('active')
        handleClick(item);
    }
}

export default City;