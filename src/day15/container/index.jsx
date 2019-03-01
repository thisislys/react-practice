import React, { Component } from 'react';
import List from './list';
import '../common/style.css';
class Index extends Component {
    render() {
        return (
            <div className="box">
                <h4>购物车</h4>
                <List/>
            </div>
        );
    }
}

export default Index;