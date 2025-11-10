import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product');
    }
};

export const addToCart = async (cartData) => {
    try {
        const response = await axios.post(`${API_URL}/cart`, cartData);
        return response.data;
    } catch (error) {
        throw new Error('Error adding to cart');
    }
};

export const fetchCart = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/cart/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching cart');
    }
};

export const clearCart = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/cart/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error clearing cart');
    }
};