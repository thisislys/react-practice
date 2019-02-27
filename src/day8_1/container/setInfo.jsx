import React, { Component } from 'react';
let i = 0;
class SetInfo extends Component {

    render() {
        return (
            <div className="info">
                <h3>收获地址</h3>
                <p><b>收货人</b><input ref="name" type="text" placeholder="姓名" /></p>
                <p><b>联系电话</b><input ref="phone" type="text" placeholder="手机号" /></p>
                <p><b>详细地址</b><input ref="address" type="text" placeholder="详细地址" /></p>
                <button onClick={this.handleInFo}>保存</button>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
       let { list } = this.props;
        if ((nextProps.setInfo.name && nextProps.setInfo.phone && nextProps.setInfo.address) !== undefined) {
            this.refs.name.value = nextProps.setInfo.name;
            this.refs.phone.value = nextProps.setInfo.phone;
            this.refs.address.value = nextProps.setInfo.address;
            // for (let t = 0, len = list.length; t < len; t++) {
            //     if (list[t].id === nextProps.setInfo.id) {
            //         list[i] = nextProps.setInfo
            //     }
            // }
        }
        // for (let t = 0, len = list.length; t < len; t++) {
        //     if (list[t].id === nextProps.setInfo.id) {
        //         list[i] = nextProps.setInfo
        //     }
        // }
    }
   
    handleInFo = () => {
        let nameVal = this.refs.name.value;
        let phoneVal = this.refs.phone.value;
        let addressVal = this.refs.address.value;
        this.props.saveInfo({ name: nameVal, phone: phoneVal, address: addressVal, id: i++ });
        this.refs.name.value = "";
        this.refs.phone.value = "";
        this.refs.address.value = "";
    }

}

export default SetInfo;