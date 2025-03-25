import axios from 'axios';


const API_URL = 'http://localhost:5029/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const register = async (name, email, passwordhash) => {
  try {
    const response = await api.post('/auth/register', {
      name,
      email,
      passwordhash,
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; 
  }
};


export const login = async (email, passwordhash) => {
  try {
    const response = await api.post('/auth/login', { email, passwordhash});
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;  
  }
};

export const getProtectedData = async () => {
  try {
    const response = await api.get('/protected');
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;  
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get('/product/get-products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/product/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

export const getMostRecentProductsByCategory = async (categoryId, limit = 10) => {
  try {
    const response = await api.get(`/product/most-recent/category/${categoryId}`, {
      params: { limit}, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching most recent products by category:', error);
    throw error;
  }
};

