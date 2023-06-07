import axios from 'axios';

const taskAPI = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = async () => {
    const response = await taskAPI.get('/');
    return response.data;
}

export const getTask = async (id) => {
    const response = await taskAPI.get(`/${id}/`);
    return response.data;
} 

export const postTask = async (task) => await taskAPI.post('/', task);

export const deleteTask = async (id) => await taskAPI.delete(`/${id}/`);

export const updateTask = async (id, task) => await taskAPI.put(`/${id}/`, task);
