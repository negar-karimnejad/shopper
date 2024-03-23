/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext, useEffect } from 'react';
import supabase from '../services/supabase';

const initialState = {
  user: null,
  items: [],
};

const CartContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data, error } = await supabase
          .from('cart')
          .select('*')
          .eq('user_id', state.user?.id);
        if (error) {
          throw error;
        }
        if (data) {
          dispatch({ type: 'SET_CART_ITEMS', payload: data });
        }
      } catch (error) {
        console.error('Error fetching cart items:', error.message);
      }
    };
    if (state.user) {
      fetchCartItems();
    }
  }, [state.user]);

  const addToCart = async (item) => {
    try {
      const { data, error } = await supabase
        .from('cart')
        .insert({ ...item, user_id: state.user.id });
      if (error) {
        throw error;
      }
      if (data) {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', itemId)
        .eq('user_id', state.user.id);
      if (error) {
        throw error;
      }
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    } catch (error) {
      console.error('Error removing item from cart:', error.message);
    }
  };

  const clearCart = async () => {
    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('user_id', state.user.id);
      if (error) {
        throw error;
      }
      dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      console.error('Error clearing cart:', error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export { CartContext, useCart };
