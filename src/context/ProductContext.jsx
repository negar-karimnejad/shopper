/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import supabase from '../services/supabase';
import toast from 'react-hot-toast';

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
    case 'remove_Product':
      return {
        ...state,
        products: [action.payload],
      };

    default:
      throw new Error('Unknown Action Type');
  }
};

const ProductProvider = ({ children }) => {
  const [{ products, product }, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    try {
      let { data: products } = await supabase.from('products').select('*');
      dispatch({ type: 'get_Products', payload: products });
    } catch (error) {
      console.error('Error getting products:', error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProduct = useCallback(
    async (id) => {
      const product = products.find((product) => product.id === Number(id));
      dispatch({ type: 'get_Product', payload: product });
      return product;
    },
    [products],
  );

  const addProduct = async (newProduct) => {
    try {
      const { error } = await supabase
        .from('products')
        .insert(newProduct)
        .single();
      if (error) {
        throw error;
      }

      toast.success('Product added to list');
      getProducts();
    } catch (error) {
      toast.error('Product could not be added');
      console.error('Error adding product:', error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);

      if (error) {
        console.error(error);
        toast.error('Product could not be deleted');
        throw new Error('Product could not be deleted');
      }

      toast.success('Product removed from list');
      getProducts();
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

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        getProduct,
        removeProduct,
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
        dispatch,
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
