
export default {
    nameSpace: 'counter',
    state: {
        num: 0
    },
    reducers: {
        ADD_NUM: (state, payload) => {
            return Object.assign({}, state, { num: state.num+1 });
        },
        CUT_NUM: (state, payload) => {
            return Object.assign({}, state, { num: state.num-1 });
        }
    }
}
