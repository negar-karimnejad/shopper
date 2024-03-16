import { createContext, useContext, useReducer } from 'react';

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCart =()=>{
    
  }
  return (
    <CartContext.Provider value={{ dispatch, state }}>
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
