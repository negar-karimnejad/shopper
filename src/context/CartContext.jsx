/* eslint-disable react-refresh/only-export-components */
import supabase from '../services/supabase';

import { createContext, useContext, useEffect, useReducer } from 'react';
import { useAuth } from './AuthContext';

export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'get_cart':
      return { state: action.payload };
    case 'get_user_cart':
      return { state: action.payload };
    case 'add_to_cart':
      return { state: action.payload };

    case 'remove_from_cart':
      return { state: action.payload };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [{ state }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getCart = async () => {
      let { data: cart, error } = await supabase.from('cart').select('*');
      if (error) {
        console.error('Error while getting items from cart:', error.message);
        return;
      }
      dispatch({ type: 'get_cart', payload: cart });
    };
    getCart();
  }, []);

  const { user } = useAuth();

  useEffect(() => {
    const getUserCart = async () => {
      let { data: userCart, error } = await supabase
        .from('cart')
        .select()
        .eq('user_id', user?.user?.id);
      if (error) {
        console.error('Error while getting items from cart:', error.message);
        return;
      }
      dispatch({ type: 'get_user_cart', payload: userCart });
    };
    getUserCart();
  }, [user?.user?.id]);

  const addToCart = async (item) => {
    const { data: existInCart, error } = await supabase
      .from('cart')
      .select()
      .eq('user_id', user?.user?.id);

    if (error) {
      throw error;
    }

    if (existInCart.length > 0) {
      const existingItem = existInCart.find(cartItem => cartItem.items.id === item.items.id);
      if (existingItem) {
        const { data: updatedItemData, error: updateError } = await supabase
          .from('cart')
          .update({ quantity: existingItem.quantity + item.quantity })
          .eq('id', existingItem.id)
          .single();

        if (updateError) {
          throw updateError;
        }

        dispatch({ type: 'ADD_TO_CART', payload: updatedItemData });
        return updatedItemData;
      }
    }
      const { data, error } = await supabase
        .from('cart')
        .update()
        .eq('items', item.items)
        .select();

      if (error) {
        console.error('Error while adding item to cart:', error.message);
        return;
      }

      dispatch({ type: 'add_to_cart', payload: item });

      return data;
    }
    const { error } = await supabase.from('cart').insert(item).select();

    if (error) {
      console.error('Error while adding item to cart:', error.message);
      return;
    }
    dispatch({ type: 'add_to_cart', payload: item });
  };
  const removeFromCart = async (id) => {
    const { error } = await supabase.from('cart').delete().eq('id', id);

    if (error) {
      console.error('Error while removing item from cart:', error.message);
      return;
    }

    const filteredCart = state.filter((item) => item.id !== id);
    dispatch({ type: 'remove_from_cart', payload: filteredCart });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}

export { CartProvider, useCart };
