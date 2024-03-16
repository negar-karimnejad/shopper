/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import { Product } from '../../model/Product';

const ProductContext = createContext();

const initialState = {
  products: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'createProduct':
      return {
        ...state,
        products: action.payload,
      };

    default:
      throw new Error('Unknown Action Type');
  }
};

const ProductProvider = ({ children }) => {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

  const createProduct = async (newProduct) => {
    try {
      const product = await Product.create(newProduct);
      dispatch({ type: 'createProduct', payload: product });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ProductContext.Provider value={{ createProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('Product provider uses where that is not provided');
  return context;
};
export { ProductProvider, useProduct };
