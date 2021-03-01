
export default {
    nameSpace: 'table',
    state: {
        datasource: [
            {
                id: 1,
                value: '杂志'
            },
            {
                id: 2,
                value: '科技'
            },
            {
                id: 3,
                value: '文学'
            }
        ]
    },
    reducers: {
        add: (state, payload) => {
            const datasource = state.datasource.concat([payload]);
            return Object.assign({}, state, { datasource });
        },
        delete: (state, payload) => {
            const datasource = state.datasource.filter(item => item.id !== payload.id);
            return Object.assign({}, state, { datasource });
        },
    }
}
