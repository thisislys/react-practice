let defaultState={
    data:[{
        name:'张三',
        age:18,
        add:"河南"
    },{
        name:'李四',
        age:20,
        add:"江苏"
    },{
        name:'王五',
        age:17,
        add:"安徽"
    }]
}
const UpdateRender=(state=defaultState,action)=>{
    const {type,payload}=action;
    switch (type) {
        case 'UPDATA':
            return {...state,data:[...payload]};
        default:
            return state;
    }
}
export default UpdateRender;