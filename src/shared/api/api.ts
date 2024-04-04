import axios from 'axios';

export const $api = axios.create();
$api.interceptors.request.use((config) => {
    config.baseURL = 'http://localhost:8000/';
    config.headers.authorization = localStorage.getItem('user') || '';

    return config;
});
