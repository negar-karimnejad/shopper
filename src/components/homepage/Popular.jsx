import ProductsList from '../product/ProductsList';
import ProductCard from '../product/ProductCard';
import SectionHeader from './SectionHeader';
import { useProduct } from '../../context/ProductContext';
import Spinner from '../Spinner';

function Popular() {
  const { products } = useProduct();

  if (!products.length) return <Spinner />;
  return (
    <div className="container">
      <SectionHeader title="popular in women" />
      <ProductsList>
        {products.slice(10,14).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default Popular;
