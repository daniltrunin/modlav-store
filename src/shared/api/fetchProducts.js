import {api} from '../api/axios.js';
const LIMIT = 10;

export const fetchProducts = async ({offset = 0, limit = LIMIT} = {}) => {
    const response = await api.get('/products', {
        params: {
            offset,
            limit,
        },
    });
    return response.data;
};