/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react';
import supabase from '../services/supabase';

const ProductContext = createContext();

const initialState = {
  products: [],
  product: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getProducts':
      return {
        ...state,
        products: action.payload,
      };
    case 'getProduct':
      return {
        ...state,
        product: action.payload,
      };

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
  const [{ products, product }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let { data: products } = await supabase.from('products').select('*');
        dispatch({ type: 'getProducts', payload: products });
      } catch (error) {
        console.error('Error getting products:', error.message);
      }
    };
    getProducts();
  }, []);

  const getProduct = async (id) => {
    try {
      const product = products.find((product) => product.id === Number(id));
      dispatch({ type: 'getProduct', payload: product });
    } catch (error) {
      console.error('Error getting product:', error.message);
    }
  };
  const addProduct = async (newProduct) => {
    try {
      await supabase.from('products').insert(newProduct).select();
      dispatch({ type: 'addProduct', payload: newProduct });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  const popularProducts = products.filter(product=>product.category==="women")
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  const kidsProducts = products.filter((product) => product.category === 'kid');
  const menProducts = products.filter((product) => product.category === 'men');
  const womenProducts = products.filter(
    (product) => product.category === 'women',
  );

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        getProduct,
        products,
        product,
        menProducts,
        womenProducts,
        kidsProducts,
        popularProducts,
      }}
    >
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
