import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Detail from './detail';
import Children from './children';
class Index extends Component {
    constructor(props) {
super(props);
this.state={
    data: "我是更新前的数据"
}
    }
    static defaultProps = {
        arr: [1, 3, 5, 7, 9],
        obj: { name: "liangyuan", age: "19" },
        bool: true,
        func: () => { return 123 },
        num: 333,
        str: "liangyuan",
        anything: "anything",
        ele: <b>元素</b>,
        enums: 'my',
        types: { sometype: "sometype" },
        arrType: [2, 4, 6, 8, 0],
        objType: { age: 19 },
        style: { color: "red", fontSize: 18 },
        any: 1999,
        // symbol:"."
       
    }
    static propTypes = {
        arr: PropTypes.array,//数组
        obj: PropTypes.object.isRequired,//对象(不能为空)
        bool: PropTypes.bool,//布尔值
        func: PropTypes.func,//函数
        num: PropTypes.number,//数组
        str: PropTypes.string,//字符串
        anything: PropTypes.node,//任意被渲染的事物
        ele: PropTypes.element,//元素
        enums: PropTypes.oneOf(['my', 'name', 'is', 'liangyuan']),//特定的值的任意一个
        types: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.number
        ]),//指定类型的任意一种
        arrType: PropTypes.arrayOf(PropTypes.number),//指定类型组成的数组
        objType: PropTypes.objectOf(PropTypes.number),//制定类型组成的对象
        style: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
        }),
        any: PropTypes.any.isRequired,//不为空的任意类型
        // symbol:PropTypes.symbol
    }
    render() {
        const { arr, str, num, bool, obj, func, anything, ele, enums, types, arrType, objType, style, any } = this.props;
        console.log("bool", bool)
        return (
            <div key="1">
                <p>arr:{arr}</p>
                <p>str:{str}</p>
                <p>num:{num}</p>
                <p>obj:{obj.name} {obj.age}</p>
                <p>func:{func()}</p>
                <p>bool:{bool ? 'true' : 'false'}</p>
                <p>anything:{anything}</p>
                <p>ele:{ele}</p>
                <p>enum:{enums}</p>
                <p>types:{types.sometype}</p>
                <p>arrType:{arrType}</p>
                <p>objType:{objType.age}</p>
                <p style={style}>style:颜色：{style.color}字体大小：{style.fontSize}px</p>
                <p>any:{any}</p>
                <Detail>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    {
                        // (num)=>{
                        //     return num
                        // }
                    }
                </Detail>
                <Children data={this.state.data} />
                <button onClick={() => {
                    this.setState({
                        data: "我是更新后的数据"
                    },()=>{
                        console.log(this.state.data)
                    })
                }}>点击更新</button>
            </div>
        );
    }
}

export default Index;