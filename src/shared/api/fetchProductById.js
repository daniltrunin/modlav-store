import {api} from '../api/axios.js';

export const fetchProductsById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
};
