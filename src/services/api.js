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

export const getAllProducts = async () =>{
  try{
    const response = await api.get('/products');
    return response.data;
  }catch(error){
    console.error('Error fetching products:', error);
    throw error;
  }
}

export const getProductsByCategory = async(category) =>{
  try{
    const response = await api.get(`/Product/category/${category}`);
    return response.data;
  }catch(error){
    console.error('Error fetching products:', error);
    throw error;
  }
}

export const getWomenProducts = async () => getProductsByCategory("MEN");
export const getMenProducts = async () => getProductsByCategory("WOMEN");
export const getAccessoriesProducts = async () => getProductsByCategory("ACCESSORIES");


