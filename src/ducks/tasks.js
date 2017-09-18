const ADD_TASK = 'chores/ADD_TASK';
const REMOVE_CHORE = 'tasks/REMOVE_CHORE'

export default function reducer(state, action) {
    switch(action.type){
        case ADD_TASK:
            let newState = {};
            let newTask = action.payload;
            let newTasks = [...state.chores]

            return {
                tasks: newTasks
            }
        default:
            return state;
    }
}