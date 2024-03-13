import ProductsList from '../product/ProductsList';
import ProductCard from '../product/ProductCard';
import SectionHeader from './SectionHeader';

function Popular() {
  return (
    <div className="container">
      <SectionHeader title="popular in women" />
      <ProductsList>
        {Array.from({ length: 4 }).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default Popular;
