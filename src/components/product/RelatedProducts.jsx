import SectionHeader from '../homepage/SectionHeader';
import ProductCard from './ProductCard';
import ProductsList from './ProductsList';

function RelatedProducts() {
  return (
    <div className="container">
      <SectionHeader title="related products" />
      <ProductsList>
        {Array.from({ length: 4 }).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default RelatedProducts;
