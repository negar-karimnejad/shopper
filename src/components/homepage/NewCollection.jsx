import ProductCard from '../product/ProductCard';
import ProductsList from '../product/ProductsList';
import SectionHeader from './SectionHeader';

function NewCollection() {
  return (
    <div className="container">
      <SectionHeader title="new collections" />
      <ProductsList>
        {Array.from({ length: 8 }).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default NewCollection;
