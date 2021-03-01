import { createStore } from 'redux';
import reducer1 from '../modals/modala';  
import reducer2 from '../modals/modalb';  

const { _store, _state } = constructStore([reducer1, reducer2]);

function constructStore(_arry) {
    const _store = {},
        _state = {};
    _arry.forEach(item => {
        const { nameSpace, state, reducers } = item; 
        _store[nameSpace] = reducers;
        _state[nameSpace] = state;
    });
    return { _store, _state };
}

const store = (state = _state, action) => {
    const _arry = action.type.split('/');
    if (_arry.length !== 2) {
        console.error('不是可识别的action');
        return state;
    }
    const nameSpace = _arry[0],
        _action = _arry[1];
    if (_store[nameSpace] && _store[nameSpace][_action] && typeof _store[nameSpace][_action] === 'function') {
        return {
            ...state,
            [nameSpace]: _store[nameSpace][_action](state[nameSpace], action.payload)
        }
    }
    return state;
}

export default createStore(store);