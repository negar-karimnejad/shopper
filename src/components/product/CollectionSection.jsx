import Spinner from '../Spinner';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import ProductsList from './ProductsList';

function CollectionSection({ products, banner }) {
  if (!products.length) return <Spinner title="Loading..." />;

  return (
    <div className="container pt-10">
      {banner && <img src={banner} alt="men-banner" />}
      <ProductsFilter products={products} />
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default CollectionSection;
