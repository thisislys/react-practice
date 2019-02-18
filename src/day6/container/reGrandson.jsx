import React, { Component } from 'react';
import Context from '../common/context';
class ReGrandson extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        (obj)=>{
                            console.log(obj);
                            return (
                                <div>
                                    {obj.data}
                                    <br/>
                                    <button onClick={obj.changeChild}>我是重孙子中的按钮,通过context更改数据</button>
                                </div>
                            )
                        }
                    }
                </Context.Consumer>
                
            </div>
        );
    }
}

export default ReGrandson;