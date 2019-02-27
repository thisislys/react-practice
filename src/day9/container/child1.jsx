import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Xuebi from './xuebi';
import Kele from './kele';
import Binghongcha from './binghongcha';

class Child1 extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.handlePath('kele')}>可乐</button>
                <button onClick={() => this.handlePath('xuebi')}>雪碧</button>
                <button onClick={() => this.handlePath('binghongcha')}>冰红茶</button>
                <Route path="/child1/kele" component={Kele} />
                <Route path="/child1/xuebi" component={Xuebi} />
                <Route path="/child1/binghongcha" component={Binghongcha} />
            </div>
        );
    }
    handlePath = (path) => {
        let { push } = this.props.history;
        push("/child1/" + path)
    }
}

export default Child1;