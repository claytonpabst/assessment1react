import axios from 'axios';

export const getTasks = function() {
    return axios.get('https://practiceapi.devmountain.com/api/tasks/')
    .then(res => res.data)
}

export const addTask = function(fullTask) {
    return axios.post('https://practiceapi.devmountain.com/api/tasks/', fullTask)
    .then(res => res.data)
}

export const completeTask = function(id){
    return axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`, {"completed":true})
    .then(res => res.data)
}

export const deleteTask = function(id){
    return axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(res => res.data)
}

export const updateTask = function(id, fullTask){
    return axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, fullTask)
    .then(res => res.data)
}