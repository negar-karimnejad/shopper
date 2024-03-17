import CollectionSection from '../components/product/CollectionSection';
import { useProduct } from '../context/ProductContext';

function Women() {
  const { womenProducts } = useProduct();

  return <CollectionSection products={womenProducts} />;
}

export default Women;
