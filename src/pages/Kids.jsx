import CollectionSection from '../components/product/CollectionSection';
import { useProduct } from '../context/ProductContext';

function Kids() {
  const { kidsProducts } = useProduct();
  return <CollectionSection products={kidsProducts} />;
}

export default Kids;
