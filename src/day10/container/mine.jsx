import React, { Component } from 'react';

class Mine extends Component {
    render() {
        return (
                <div className="mine">
                    <h3>登陆</h3>
                    <div className="login">
                        <p><input ref="name" type="text" placeholder="账户名" /></p>
                        <p><input ref="password" type="password" placeholder="密码" /></p>
                    </div>

                    <button onClick={this.handleLogin}>登陆</button>
                    <p className="else"><span>立即注册</span><span>找回密码</span></p>
                    <p className="phone">客服电话：400-456-12345</p>
                </div>
        );
    }
}

export default Mine;