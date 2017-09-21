import axios from 'axios';

export const getTasks = function() {
    return axios.get('https://practiceapi.devmountain.com/api/tasks/')
    .then(res => res.data)
}