import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollectionSection from '../components/product/CollectionSection';
import { useProduct } from '../context/ProductContext';

function Products() {
  const { offersProducts, newProducts, expensiveProducts, cheapestProducts } =
    useProduct();
  const { query } = useParams();

  const products =
    (query === 'offers' && offersProducts) ||
    (query === 'bestSelling' && offersProducts) ||
    (query === 'latest' && newProducts) ||
    (query === 'newest' && newProducts) ||
    (query === 'expensive' && expensiveProducts) ||
    (query === 'cheapest' && cheapestProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CollectionSection products={products} />;
}

export default Products;
