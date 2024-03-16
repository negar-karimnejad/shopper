import { createContext, useContext, useReducer } from 'react';
import connectDB from '../utils/db';
import { ShoppingCart } from '../../model/Cart';

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

    default:
      throw new Error('Unknown Action Type');
  }
};

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  const getCart = async (userId) => {
    try {
      connectDB();
      const shoppingCart = await ShoppingCart.find({ userId });
      dispatch({ type: 'getCart', payload: shoppingCart });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <CartContext.Provider value={{ getCart, cart }}>
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
