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
    case 'get_Products':
      return {
        ...state,
        products: action.payload,
      };
    case 'get_Product':
      return {
        ...state,
        product: action.payload,
      };

    case 'add_Product':
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
        dispatch({ type: 'get_Products', payload: products });
      } catch (error) {
        console.error('Error getting products:', error.message);
      }
    };
    getProducts();
  }, []);

  const getProduct = async (id) => {
    try {
      const product = products.find((product) => product.id === Number(id));
      dispatch({ type: 'get_Product', payload: product });
    } catch (error) {
      console.error('Error getting product:', error.message);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      await supabase.from('products').insert(newProduct).select();
      dispatch({ type: 'add_Product', payload: newProduct });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  // Sort products according by: offers, new, expensive, cheapest, kids, men, women, popular

  const offersProducts = products.slice().sort((a, b) => b.rating - a.rating);
  const newProducts = products.slice().sort((a, b) => b.id - a.id);
  const expensiveProducts = products.slice().sort((a, b) => b.price - a.price);
  const cheapestProducts = products.slice().sort((a, b) => a.price - b.price);
  const kidsProducts = products.filter((product) => product.category === 'kid');
  const menProducts = products.filter((product) => product.category === 'men');
  const womenProducts = products.filter(
    (product) => product.category === 'women',
  );
  const popularProducts = products
    .filter((product) => product.category === 'women')
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const value = {
    addProduct,
    getProduct,
    products,
    product,
    menProducts,
    womenProducts,
    kidsProducts,
    newProducts,
    popularProducts,
    offersProducts,
    expensiveProducts,
    cheapestProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error('useProduct must be used within a ProductProvider');
  return context;
};
export { ProductProvider, useProduct };
