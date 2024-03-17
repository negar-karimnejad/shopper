import CollectionSection from '../components/product/CollectionSection';
import { useProduct } from '../context/ProductContext';

function Men() {
  const { menProducts } = useProduct();

  return <CollectionSection products={menProducts} />;
}

export default Men;
