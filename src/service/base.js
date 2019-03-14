import axios from 'axios';
const baseUrl = "http://192.168.200.129:3000"
const BaseService = axios.create(
    {
        baseURL: baseUrl
    }
);

export default BaseService;