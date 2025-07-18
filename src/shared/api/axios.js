import axios from 'axios';

const url = 'https://api.escuelajs.co/api/v1'

export const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
})