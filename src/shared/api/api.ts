import axios from 'axios';
import { USER_AUTH_DATA } from '@/shared/const/const';

export const $api = axios.create();
$api.interceptors.request.use((config) => {
    config.baseURL = 'http://localhost:8000/';
    config.headers.authorization = localStorage.getItem(USER_AUTH_DATA) || '';

    return config;
});
