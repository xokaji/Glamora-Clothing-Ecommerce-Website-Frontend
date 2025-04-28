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

///////////////



// Get product by name
export const getProductByName = async (productName) => {
  try {
    const response = await axios.get(`${API_URL}/name/${productName}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting product with name ${productName}:`, error);
    throw error;
  }
};



// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Assuming you're sending data in form-data format
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, productData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Assuming you're sending data in form-data format
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    throw error;
  }
};

// Apply a discount to a product
export const applyDiscount = async (productId, discount) => {
  try {
    const response = await axios.put(`${API_URL}/discount/${productId}/${discount}`);
    return response.data;
  } catch (error) {
    console.error(`Error applying discount to product with ID ${productId}:`, error);
    throw error;
  }
};

// Search products based on filters
export const searchProducts = async (filters) => {
  try {
    const { name, minPrice, maxPrice, categoryId } = filters;
    const response = await axios.get(`${API_URL}/search`, {
      params: { name, minPrice, maxPrice, categoryId },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

// Get new women products (limit = 1)
export const getNewWomenProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/new-women`);
    return response.data;
  } catch (error) {
    console.error('Error getting new women products:', error);
    throw error;
  }
};


// Update product quantity
export const updateProductQuantity = async (productId, quantityChange) => {
  try {
    const response = await axios.put(`${API_URL}/update-quantity/${productId}`, quantityChange);
    return response.data;
  } catch (error) {
    console.error(`Error updating quantity for product with ID ${productId}:`, error);
    throw error;
  }
};

// Decrease product quantity
export const decreaseProductQuantity = async (productId, quantity) => {
  try {
    const response = await axios.put(`${API_URL}/decrease-quantity/${productId}`, quantity);
    return response.data;
  } catch (error) {
    console.error(`Error decreasing quantity for product with ID ${productId}:`, error);
    throw error;
  }
};