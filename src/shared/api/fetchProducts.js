import {api} from '../api/axios.js';

export const fetchProducts = async ({offset = 0, limit = 20} = {}) => {
    const response = await api.get('/products', {
        params: {
            offset,
            limit,
        },
    });
    return response.data;
};