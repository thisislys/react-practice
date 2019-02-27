import React, { Component } from 'react';
import Head from './head';
import Body from './body';
import Context from '../common/context';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {
                '小学': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
                '初中': ['初一', '初二', '初三'],
                '高中': ['高一', '高二', '高三'],
                '大学': ['大一', '大二', '大三', '大四']
            },
            defaultIndex: 0
        }
    }
    render() {
        const { list, defaultIndex } = this.state;
        return (
            <div>
                <Context.Provider value={Object.values(list)[defaultIndex]}>
                    <Head data={Object.keys(list)} handleChange={this.handleChange} />
                    <Body data={Object.values(list)[defaultIndex]} />
                </Context.Provider>
            </div>
        );
    }
    handleChange = (i) => {
        this.setState({
            defaultIndex: i
        })
    }
}

export default Index;