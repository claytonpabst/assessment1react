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
const ADD_TASK_PENDING = 'ADD_TASK_PENDING';
const ADD_TASK_FULFILLED = 'ADD_TASK_FULFILLED';

const DELETE_TASK = 'DELETE_TASK';
const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING';
const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED';

const COMPLETE_TASK = 'COMPLETE_TASK';
const COMPLETE_TASK_PENDING = 'COMPLETE_TASK_PENDING';
const COMPLETE_TASK_FULFILLED = 'COMPLETE_TASK_FULFILLED';

const UPDATE_TASK = 'UPDATE_TASK';
const UPDATE_TASK_PENDING = 'UPDATE_TASK_PENDING';
const UPDATE_TASK_FULFILLED = 'UPDATE_TASK_FULFILLED';

export default function reducer(state = initialState, action) {
        let newTaskList = [...state.taskList]
    switch(action.type){
        case GET_TASKS_PENDING:
            return Object.assign({}, state, {loading: true})

        case GET_TASKS_FULFILLED:
            return Object.assign({}, state, {loading: false, tasks: action.payload})

        case ADD_TASK_FULFILLED:
            console.log(action.payload)

            return Object.assign({}, state, {tasks: action.payload});

        case DELETE_TASK_FULFILLED:
            return Object.assign({},state,{tasks:action.payload})
        
        case COMPLETE_TASK_FULFILLED:
            return Object.assign(
                {},
                state,
                {
                    tasks: action.payload
                }
            );

        case UPDATE_TASK_FULFILLED:
            return Object.assign({}, state, {tasks: action.payload})

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
    let fullTask = 
        {
            "title": `${newTask}`,
            "description": "",
            "completed": false
        }
    return {
        type: ADD_TASK,
        payload: service.addTask(fullTask)
    }
}

export function completeTask(id){
    return {
        type: COMPLETE_TASK,
        payload: service.completeTask(id)
    }
}

export function deleteTask(id){
    return {
        type: DELETE_TASK,
        payload: service.deleteTask(id)
    }
}

export function updateTask(id, title, description){
    let fullTask =
        {
            "title": `${title}`,
            "description": `${description}`,
            "completed": false            
        }
    return {
        type: UPDATE_TASK,
        payload: service.updateTask(id, fullTask)
    }
}