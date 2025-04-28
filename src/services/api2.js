import axios from 'axios';

const API_URL = 'http://localhost:5029/api';  // Replace with your actual API URL

// Function to check if JWT token is expired
const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const expiry = payload.exp * 1000;  // Convert expiration to milliseconds
  return Date.now() > expiry;
};

export const getCart = async () => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token || isTokenExpired(token)) {
      throw new Error('Unauthorized: No JWT token found or token expired.');
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
    if (!token || isTokenExpired(token)) {
      throw new Error('Unauthorized: No JWT token found or token expired.');
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

export const removeItemFromCart = async (cartItemId) => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token || isTokenExpired(token)) {
      throw new Error('Unauthorized: No JWT token found or token expired.');
    }

    await axios.delete(`${API_URL}/items/${cartItemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { message: 'Item removed from cart' };
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

export const updateCartItemQuantity = async (cartItemId, quantity) => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token || isTokenExpired(token)) {
      throw new Error('Unauthorized: No JWT token found or token expired.');
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

    return { message: 'Item quantity updated' };
  } catch (error) {
    console.error('Error updating item quantity in cart:', error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token || isTokenExpired(token)) {
      throw new Error('Unauthorized: No JWT token found or token expired.');
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
