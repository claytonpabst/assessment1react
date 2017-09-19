const initialState = {
    taskList: [                  
        {task:'Finish React Test', checked: false},
        {task:'Do This', checked: false},
        {task:'Do That', checked: false},
        {task:'Finish React', checked: false}
    ]
}

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK'
const COMPLETE_TASK = 'COMPLETE_TASK'

export default function reducer(state = initialState, action) {
        let newTaskList = [...state.taskList]
    switch(action.type){
        case ADD_TASK:
            console.log('hit')
            newTaskList.push({task:action.payload, checked:false})
            return Object.assign(
                {},
                state,
                {
                    taskList:newTaskList
                }
            );
        
        case COMPLETE_TASK:
            newTaskList[action.payload].checked = true
            return Object.assign(
                {},
                state,
                {
                    taskList:newTaskList
                }
            )

        default:
            return state;
    }
}

export function addTask(newTask){
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export function completeTask(i){
    return {
        type: COMPLETE_TASK,
        payload: i
    }
}