/* eslint-disable react-refresh/only-export-components */
import supabase from '../services/supabase';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useAuth } from './AuthContext';

export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
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
  const { user } = useAuth();
  const userId = user?.user?.id;

  const getUserCart = useCallback(async () => {
    let { data: userCart, error } = await supabase
      .from('cart')
      .select('*')
      .eq('user_id', userId);
      
    dispatch({ type: 'get_user_cart', payload: userCart });

    if (error) {
      console.error('Error while getting items from cart:', error.message);
      return;
    }
  }, [userId]);

  useEffect(() => {
    getUserCart();
  }, [getUserCart]);

  const addToCart = async (item) => {
    try {
      const { data: existInCart, error: existInCartError } = await supabase
        .from('cart')
        .select()
        .eq('user_id', user?.user?.id);

      if (existInCartError) {
        throw existInCartError;
      }

      if (existInCart.length > 0) {
        const existingItem = existInCart.find(
          (cartItem) => cartItem.product_id === item.product_id,
        );

        if (existingItem) {
          const { data: updatedItemData, error: updateError } = await supabase
            .from('cart')
            .update({ quantity: existingItem.quantity + 1 })
            .eq('id', existingItem.id)
            .single();

          dispatch({ type: 'add_to_cart', payload: updatedItemData });
          getUserCart();
          if (updateError) {
            throw updateError;
          }
          return updatedItemData;
        }
      }

      const { data: insertedItemData, error: insertError } = await supabase
        .from('cart')
        .insert(item)
        .single();

      if (insertError) {
        throw insertError;
      }

      dispatch({ type: 'add_to_cart', payload: insertedItemData });
      getUserCart();
      return insertedItemData;
    } catch (error) {
      console.error('Error while adding item to cart:', error.message);
      return null;
    }
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
