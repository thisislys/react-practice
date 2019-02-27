import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultText: ["添加收获地址+"]
        }
    }
    render() {
        let { list, deleteInfo, getInfo } = this.props;
        const { defaultText } = this.state;
        return (
            <div>
                {
                    list.length ? list.map((v, i) => {
                        return <div className="list" key={i}>
                            <h4>{v.name}</h4>
                            <span>手机号：{v.phone}</span>
                            <span>地址：{v.address}</span>
                            <p onClick={() => { getInfo(v) }}>修改</p>
                            <p onClick={() => { deleteInfo(i) }}>删除</p>
                        </div>
                    }) : <p style={{ height: "30px", lineHeight: "30px", textAlign: "center" }}>{defaultText}</p>

                }
            </div>
        );
    }
}

export default List;