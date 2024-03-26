import { useProduct } from '../../context/ProductContext';
import ProductCard from '../product/ProductCard';
import ProductsList from '../product/ProductsList';
import SectionHeader from './SectionHeader';
import Spinner from '../Spinner';

function NewCollection() {
  const { newProducts } = useProduct();

  if (!newProducts.length) return <Spinner title="Loading..." />;

  return (
    <div className="container">
      <SectionHeader title="new collections" />
      <ProductsList>
        {newProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default NewCollection;
