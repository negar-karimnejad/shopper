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
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  const getCart = async (userId) => {
    try {
      await connectDB();
      const shoppingCart = await ShoppingCart.find({ userId });
      dispatch({ type: 'getCart', payload: shoppingCart });
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToCart = async (newItem) => {
    const { productId, quantity, price, userId } = newItem;

    try {
      connectDB();
      let shoppingCart = await ShoppingCart.findOne({ userId });
      if (!shoppingCart) {
        shoppingCart = new ShoppingCart({
          userId,
          total: 0,
          items: [],
        });
      }

      const existingItemIndex = ShoppingCart.items.findIndex(
        (item) => item.productId.toString() === productId,
      );

      if (existingItemIndex !== -1) {
        const existingItem = shoppingCart.items[existingItemIndex];
        existingItem.quantity += quantity;
        existingItem.price += price;
      } else {
        shoppingCart.items.push({
          productId,
          quantity,
          price,
        });
      }
      shoppingCart.total = shoppingCart.items.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);

      await shoppingCart.save();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <CartContext.Provider value={{ getCart, addToCart, cart }}>
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
