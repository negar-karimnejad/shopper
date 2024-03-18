/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { ShoppingCart } from '../../model/Cart';
import supabase from '../services/supabase';

const CartContext = createContext();
const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCart':
      return {
        ...state,
        cart: action.payload,
      };
    case 'addToCart':
      return {
        ...state,
        cart: action.payload,
      };
    default:
      throw new Error('Unknown Action Type');
  }
};

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data, error } = await supabase.from('cart').select('*');
        if (error) {
          throw error;
        }
        setCartItems(data || []);
      } catch (error) {
        console.error('Error fetching cart items:', error.message);
      }
    };
    fetchCartItems();
  }, []);
  // const getCart = async (userId) => {
  //   try {
  //     const shoppingCart = await ShoppingCart.find({ userId });
  //     dispatch({ type: 'getCart', payload: shoppingCart });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const addToCart = async (item) => {
    const { productId, quantity, price, userId } = item;

    try {
      // Check if the user already has a cart
      const { data: userCart, error: userCartError } = await supabase
        .from('user_carts')
        .select('id')
        .eq('userId', userId)
        .single();

      if (userCartError) {
        throw userCartError;
      }

      let cartId;

      if (userCart) {
        // User already has a cart, get the cart ID
        cartId = userCart.id;
      } else {
        // User doesn't have a cart, create a new cart
        const { data: newCart, error: newCartError } = await supabase
          .from('user_carts')
          .insert({ userId: userId })
          .single();

        if (newCartError) {
          throw newCartError;
        }

        cartId = newCart.id;
      }

      // Check if the product is already in the user's cart
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.productId === item.productId,
      );

      if (existingCartItem) {
        // If the product is already in the cart, increment its quantity
        await supabase
          .from('cart_items')
          .update({ quantity: existingCartItem.quantity + item.quantity })
          .eq('id', existingCartItem.id);

        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === existingCartItem.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem,
          ),
        );
      } else {
        // If the product is not in the cart, add it
        const { data: newCartItem, error: newCartItemError } = await supabase
          .from('cart_items')
          .insert({
            cartId: cartId,
            productId: item.productId,
            quantity: item.quantity,
          })
          .single();

        if (newCartItemError) {
          throw newCartItemError;
        }

        setCartItems([...cartItems, newCartItem]);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
    }
    // try {
    //   let shoppingCart = await ShoppingCart.findOne({ userId: userId });
    //   if (!shoppingCart) {
    //     shoppingCart = new ShoppingCart({
    //       userId,
    //       total: 0,
    //       items: [],
    //     });
    //   }

    //   const existingItemIndex = ShoppingCart.items.findIndex(
    //     (item) => item.productId.toString() === productId,
    //   );

    //   if (existingItemIndex !== -1) {
    //     const existingItem = shoppingCart.items[existingItemIndex];
    //     existingItem.quantity += quantity;
    //     existingItem.price += price;
    //   } else {
    //     shoppingCart.items.push({
    //       productId,
    //       quantity,
    //       price,
    //     });
    //   }
    //   shoppingCart.total = shoppingCart.items.reduce((total, item) => {
    //     return total + item.quantity * item.price;
    //   }, 0);

    //   await shoppingCart.save();
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('Cart provider uses where that is not provided');
  return context;
}

export { CartProvider, useCart };
