import React, { Component } from 'react';
import Context from '../common/context';
class BodyChild extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        (obj)=>{
                           return <ul>
                               {obj&&obj.map(v=>(
                                    <li key={v}>{v}</li>
                               ))}
                           </ul>
                        }
                    }
                </Context.Consumer>
            </div>
        );
    }
}

export default BodyChild;