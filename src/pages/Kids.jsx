import CollectionSection from '../components/product/CollectionSection';
import { useProduct } from '../context/ProductContext';
const banner = 'images/banner_kids.png';

function Kids() {
  const { kidsProducts } = useProduct();
  return <CollectionSection products={kidsProducts} banner={banner} />;
}

export default Kids;
