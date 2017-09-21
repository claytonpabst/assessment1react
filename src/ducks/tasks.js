import * as service from '../services/service.js'

const initialState = {
    taskList: [                  
        {task:'Finish React Test', checked: false},
        {task:'Do This', checked: false},
        {task:'Do That', checked: false},
        {task:'Finish React', checked: false}
    ],
    tasks: [],
    loading: false
}

const GET_TASKS = 'GET_TASKS';
const GET_TASKS_PENDING = 'GET_TASKS_PENDING';
const GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export default function reducer(state = initialState, action) {
        let newTaskList = [...state.taskList]
    switch(action.type){
        case GET_TASKS_PENDING:
            return Object.assign({}, state, {loading: true})

        case GET_TASKS_FULFILLED:
            return Object.assign({}, state, {loading: false, tasks: action.payload})

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

        case DELETE_TASK:
            newTaskList.splice(action.payload, 1)
            return Object.assign({},state,{taskList:newTaskList})
        
        case COMPLETE_TASK:
            newTaskList[action.payload].checked = true
            return Object.assign(
                {},
                state,
                {
                    taskList:newTaskList
                }
            );

        default:
            return state;
    }
}

export function getTasks() {
    return {
        type: GET_TASKS,
        payload: service.getTasks()
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

export function deleteTask(i){
    return {
        type: DELETE_TASK,
        payload: i
    }
}