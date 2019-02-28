let defaultState={
    data:{}
}
const UpdateRender=(state=defaultState,action)=>{
    const {type,payload}=action;
    switch (type) {
        case "UPDATA":
            return {...state,data:{...payload}};
        default:
            return state;
    }
}
export default UpdateRender;