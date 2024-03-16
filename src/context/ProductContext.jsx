/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import { Product } from '../../model/Product';

const ProductContext = createContext();

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addProduct':
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      throw new Error('Unknown Action Type');
  }
};

const ProductProvider = ({ children }) => {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

  const addProduct = async (newProduct) => {
    try {
      await Product.insertOne(newProduct);
      dispatch({ type: 'addProduct', payload: newProduct });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <ProductContext.Provider value={{ addProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProduct must be used within a ProductProvider');
  return context;
};
export { ProductProvider, useProduct };
