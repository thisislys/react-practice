const defaultState = {
    list: []
}
const listAction = (state = defaultState, action) => {
    const {
        payload,
        type
    } = action;
    switch (type) {
        case 'UPDATA':
            return {
                ...state,
                list: [...payload]
            };

        default:
            return state;
    }
}
export default listAction;