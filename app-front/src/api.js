import axios from 'axios';

const api = axios.create({
    baseURL:'localhost:8080/api/reservas'
})

export default api;
