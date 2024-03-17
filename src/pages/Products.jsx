import { useProduct } from '../context/ProductContext';
import CollectionSection from '../components/product/CollectionSection';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Products() {
  const { offersProducts, newProducts } = useProduct();
  const { query } = useParams();

  const products =
    (query === 'offers' && offersProducts) ||
    (query === 'latest' && newProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CollectionSection products={products} />;
}

export default Products;
