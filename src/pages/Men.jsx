import CollectionSection from '../components/product/CollectionSection';
import { useProduct } from '../context/ProductContext';
const banner = 'images/banner_mens.png';
function Men() {
  const { menProducts } = useProduct();

  return <CollectionSection products={menProducts} banner={banner} />;
}

export default Men;
