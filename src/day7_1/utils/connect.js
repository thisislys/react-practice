import React,{Component} from 'react';
import Context from '../common/context';
export const connect = (func) => {
    console.log(func)
    return (Components) => {
        return class extends Component {
            render() {
                return (
                    <Context.Consumer>
                        {
                            (datas)=>{
                                console.log(datas)
                                let status=func(datas);
                                return (<Components {...status}/>)
                            }
                        }
                    </Context.Consumer>
                );
            }
        }
        
    }
}