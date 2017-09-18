import {createStore} from 'redux';

function reducer(state) {
    return state;
}

let initialState = {
    tasks: []
}

export default createStore(reducer, initialState);
