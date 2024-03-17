import { useProduct } from '../../context/ProductContext';
import ProductCard from '../product/ProductCard';
import ProductsList from '../product/ProductsList';
import SectionHeader from './SectionHeader';
import Spinner from '../Spinner';

function NewCollection() {
  const { products } = useProduct();

  if (!products.length) return <Spinner />;

  return (
    <div className="container">
      <SectionHeader title="new collections" />
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default NewCollection;
