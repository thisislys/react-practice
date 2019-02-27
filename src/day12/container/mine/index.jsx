import React, { Component } from 'react';
let mine;
class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mines: ''
        }
    }

    render() {
        let { mines } = this.state;
        return (
            <div className="mine">
            <h4>主页</h4>
                {
                    mines ?
                        (<div style={{margin:"10px"}}>
                            <p style={{display:"flex"}}><span style={{ borderRadius:"50%",display: "inline-block",height:"40px",width:"40px", background: "blue" }}></span><span style={{lineHeight:"40px",display: "inline-block",height:"40px"}}>用户名:{mines}</span></p>
                            <p  style={{margin:"10px"}}>账号：{mines}</p>
                        </div>) :
                        (<div>
                            <h3>登陆</h3>
                            <div className="login">
                                <p><input ref="name" type="text" placeholder="账户名" /></p>
                                <p><input ref="password" type="password" placeholder="密码" /></p>
                            </div>

                            <button onClick={this.handleLogin}>登陆</button>
                            <p className="else"><span>立即注册</span><span>找回密码</span></p>
                            <p className="phone">猫眼电影 客服电话：400-456-12345</p>
                        </div>)
                }
            </div>
        );
    }
    componentDidMount() {
        this.info()
    }
    handleLogin = () => {
        let nameVal = this.refs.name.value;
        localStorage.setItem('mine', nameVal);
        this.info()
    }
    info() {
        mine = localStorage.getItem('mine');
        this.setState({
            mines: mine
        })
    }
}

export default Mine;