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

const getChatResponse = async (userMessage) => {
  try {
    const response = await fetch("http://localhost:5029/api/chat/GetResponse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userMessage),
    });

    const data = await response.json();
    console.log("ChatGPT response:", data.response);
  } catch (error) {
    console.error("Error:", error);
  }
};


export const getCart = async () => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Unauthorized: No JWT token found.');
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};


export const addItemToCart = async (productId, quantity) => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Unauthorized: No JWT token found.');
    }

    const cartItemDto = {
      productId: productId,
      quantity: quantity,
    };

    const response = await axios.post(`${API_URL}/items`, cartItemDto, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

// Function to remove an item from the cart
export const removeItemFromCart = async (cartItemId) => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Unauthorized: No JWT token found.');
    }

    await axios.delete(`${API_URL}/items/${cartItemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { message: 'Item removed from cart' }; // Return success message
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};


export const updateCartItemQuantity = async (cartItemId, quantity) => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Unauthorized: No JWT token found.');
    }

    const cartItemDto = {
      quantity: quantity,
    };

    await axios.put(`${API_URL}/items/${cartItemId}`, cartItemDto, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return { message: 'Item quantity updated' }; // Return success message
  } catch (error) {
    console.error('Error updating item quantity in cart:', error);
    throw error;
  }
};

// Function to clear the cart
export const clearCart = async () => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('Unauthorized: No JWT token found.');
    }

    await axios.delete(`${API_URL}/clear`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { message: 'Cart cleared successfully' }; 
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

