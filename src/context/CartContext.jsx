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

  // GET USER CART
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

  // ADD ITEM TO CART
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
          (cartItem) => Number(cartItem.product_id) === Number(item.product_id),
        );
        if (existingItem) {
          const updatedQuantity = existingItem.quantity + 1;

          try {
            const { data: updatedItemData, error: updateError } = await supabase
              .from('cart')
              .update({ quantity: updatedQuantity })
              .eq('id', existingItem.id)
              .single();

            if (updateError) {
              throw updateError;
            }

            dispatch({ type: 'add_to_cart', payload: updatedItemData });

            // Refresh cart after update
            getUserCart();

            return updatedItemData;
          } catch (error) {
            console.error('Error updating item quantity:', error.message);
          }
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

  // REMOVE ITEM FROM CART
  const removeFromCart = async (id) => {
    const { data, error } = await supabase.from('cart').delete().eq('id', id);

    if (error) {
      console.error(error);
      throw new Error('Product could not be deleted');
    }

    const filteredCart = state.filter((item) => item.id !== id);
    dispatch({ type: 'remove_from_cart', payload: filteredCart });
    return data;
  };

  // UPDATE CART QUANTITY
  const decrementQuantity = async (id) => {
    const { data, error: existInCartError } = await supabase
      .from('cart')
      .select()
      .eq('id', id);
    if (existInCartError) {
      throw existInCartError;
    }

    if (data[0].quantity <= 1) {
      const { error } = await supabase.from('cart').delete().eq('id', id);
      getUserCart();

      if (error) {
        console.error('Error while removing item from cart:', error.message);
        return;
      }
    }

    const { data: updatedData, error: updateError } = await supabase
      .from('cart')
      .update({ quantity: data[0].quantity - 1 })
      .eq('id', id)
      .single();

    if (updateError) {
      throw updateError;
    }

    // dispatch({ type: 'update_cart', payload: updatedData });
    getUserCart();
  };

  const incrementQuantity = async (id) => {
    const { data, error: existInCartError } = await supabase
      .from('cart')
      .select()
      .eq('id', id);

    if (existInCartError) {
      throw existInCartError;
    }

    const { data: updatedData, error: updateError } = await supabase
      .from('cart')
      .update({ quantity: data[0].quantity + 1 })
      .eq('id', id)
      .single();

    if (updateError) {
      throw updateError;
    }

    // dispatch({ type: 'update_cart', payload: updatedData });
    getUserCart();
  };

  const totalQuantity = state
    ? state.reduce((total, cartItem) => total + cartItem.quantity, 0)
    : 0;

  const totalPrice = state
    ? state.reduce((total, cartItem) => {
        const itemPrice = cartItem.items[0].price;
        const itemQuantity = cartItem.quantity;
        return total + itemPrice * itemQuantity;
      }, 0)
    : 0;

  return (
    <CartContext.Provider
      value={{
        totalQuantity,
        totalPrice,
        state,
        addToCart,
        decrementQuantity,
        incrementQuantity,
        removeFromCart,
      }}
    >
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
