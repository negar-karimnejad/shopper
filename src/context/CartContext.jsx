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

const initialState = {
  state: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'get_user_cart':
    case 'add_to_cart':
    case 'remove_from_cart':
      return { ...state, state: action.payload }; // Update items
    case 'set_loading':
      return { ...state, loading: action.payload }; // Set loading state
    default:
      return state;
  }
};
const CartProvider = ({ children }) => {
  const [{ state, loading }, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();
  const userId = user?.user?.id;

  const getUserCart = useCallback(async () => {
    try {
      dispatch({ type: 'set_loading', payload: true }); // Set loading state to true
      let { data: userCart, error } = await supabase
        .from('cart')
        .select('*')
        .eq('user_id', userId);

      dispatch({ type: 'get_user_cart', payload: userCart });
      if (error) {
        console.error('Error while getting items from cart:', error.message);
      }
    } finally {
      dispatch({ type: 'set_loading', payload: false }); // Set loading state to false regardless of success or failure
    }
  }, [userId]);

  useEffect(() => {
    getUserCart();
  }, [getUserCart]);

  const addToCart = async (item) => {
    try {
      dispatch({ type: 'set_loading', payload: true }); // Set loading state to true
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

            dispatch({ type: 'update_cart_item', payload: updatedItemData });

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
    } finally {
      dispatch({ type: 'set_loading', payload: false }); // Set loading state to false regardless of success or failure
    }
  };

  const removeFromCart = async (id) => {
    try {
      dispatch({ type: 'set_loading', payload: true }); // Set loading state to true
      const { data, error: existInCartError } = await supabase
        .from('cart')
        .select()
        .eq('id', id);

      if (existInCartError) {
        throw existInCartError;
      }

      if (!data || data.length === 0) {
        console.log('Item not found in cart.');
        return;
      }

      const cartItem = data[0];

      let updatedItemData;

      if (cartItem.quantity > 1) {
        const updatedQuantity = cartItem.quantity - 1;

        const { data: updatedData, error: updateError } = await supabase
          .from('cart')
          .update({ quantity: updatedQuantity })
          .eq('id', cartItem.id)
          .single();

        if (updateError) {
          throw updateError;
        }

        updatedItemData = updatedData;
        dispatch({ type: 'update_cart_item', payload: updatedItemData });
        getUserCart();
      } else {
        const { error } = await supabase
          .from('cart')
          .delete()
          .eq('id', cartItem.id);

        if (error) {
          console.error('Error while removing item from cart:', error.message);
          return;
        }

        updatedItemData = null; // Indicate item removed
      }

      dispatch({ type: 'update_cart_item', payload: updatedItemData });

      // Refresh cart after update
      getUserCart();

      return updatedItemData;
    } catch (error) {
      console.error('Error removing item from cart:', error.message);
    } finally {
      dispatch({ type: 'set_loading', payload: false }); // Set loading state to false regardless of success or failure
    }
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
        state,
        loading,
        totalQuantity,
        totalPrice,
        addToCart,
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
