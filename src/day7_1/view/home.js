import React, { Component } from 'react'
import Index from './index';
import ConText from '../common/context';
class Home extends Component {
    render () {
        return (
            <div>
                home主页面
                <ConText.Provider value={this.props.data}>
                    <Index/>
                </ConText.Provider>
            </div>
        )
    }
}

export default Home