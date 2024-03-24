/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useReducer, useEffect } from 'react';
import supabase from '../services/supabase';

// const CartContext = createContext();

// const initialState = {
//   user: null,
//   cart: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_USER':
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case 'SET_CART':
//       return {
//         ...state,
//         cart: action.payload,
//       };
//     case 'ADD_TO_CART':
//       const existingItemIndex = state.cart.findIndex(
//         (item) => item.product_id === action.payload.product_id,
//       );
//       if (existingItemIndex !== -1) {
//         const updatedCart = [...state.cart];
//         updatedCart[existingItemIndex].quantity += action.payload.quantity;
//         return {
//           ...state,
//           cart: updatedCart,
//         };
//       } else {
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       }
//     default:
//       return state;
//   }
// };

// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = supabase.auth.user();
//       dispatch({ type: 'SET_USER', payload: user });
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     const fetchCart = async () => {
//       if (state.user) {
//         const { data: cart, error } = await supabase
//           .from('cart')
//           .select('*')
//           .eq('user_id', state.user.id)
//           .single();

//         if (error) {
//           console.error('Error fetching cart:', error.message);
//           return;
//         }

//         if (cart) {
//           dispatch({ type: 'SET_CART', payload: cart.items });
//         }
//       }
//     };

//     fetchCart();
//   }, [state.user]);

//   const addToCart = async (product) => {
//     if (!state.user) {
//       console.error('User is not authenticated');
//       return;
//     }

//     const { data: existingCart, error: fetchError } = await supabase
//       .from('cart')
//       .select('*')
//       .eq('user_id', state.user.id)
//       .single();

//     if (fetchError) {
//       console.error('Error fetching cart:', fetchError.message);
//       return;
//     }

//     if (existingCart) {
//       const existingItem = existingCart.items.find(
//         (item) => item.product_id === product.product_id,
//       );
//       if (existingItem) {
//         await supabase
//           .from('cart')
//           .update({ quantity: existingItem.quantity + 1 })
//           .eq('product_id', product.product_id);
//       } else {
//         await supabase.from('cart').insert([
//           {
//             user_id: state.user.id,
//             product_id: product.product_id,
//             quantity: 1,
//           },
//         ]);
//       }
//     } else {
//       await supabase.from('cart').insert([
//         {
//           user_id: state.user.id,
//           product_id: product.product_id,
//           quantity: 1,
//         },
//       ]);
//     }

//     dispatch({
//       type: 'ADD_TO_CART',
//       payload: { product_id: product.product_id, quantity: 1 },
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cart: state.cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// function useCart() {
//   const context = useContext(CartContext);
//   if (!context) throw new Error('useCart must be used within a CartProvider');
//   return context;
// }

// export { CartProvider, useCart };

import { createContext, useContext, useEffect, useReducer } from 'react';

export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'get_cart':
      return { state: action.payload };
    case 'add_to_cart':
      return { ...state, state: action.payload };

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

  const addToCart = async (item) => {
    const { error } = await supabase.from('cart').insert(item).select();

    if (error) {
      console.error('Error while adding item to cart:', error.message);
      return;
    }

    const { data: product } = await supabase
      .from('products')
      .select('*')
      .eq('id', item.product_id);

    console.log(product);
    dispatch({ type: 'add_to_cart', payload: product });
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
