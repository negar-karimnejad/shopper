import CollectionSection from '../components/product/CollectionSection';
import useProduct from '../context/ProductContext';
const banner = 'images/banner_women.png';

function Women() {
  const { womenProducts } = useProduct();

  return <CollectionSection products={womenProducts} banner={banner} />;
}

export default Women;
