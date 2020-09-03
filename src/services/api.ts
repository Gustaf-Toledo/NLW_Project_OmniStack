import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:88'
})

export default api;