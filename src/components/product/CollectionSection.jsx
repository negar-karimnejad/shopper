import Button from '../Button';
import Spinner from '../Spinner';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import ProductsList from './ProductsList';

function CollectionSection({ products, banner }) {
  if (!products.length) return <Spinner />;

  return (
    <div className="container pt-10">
      {banner && <img src={banner} alt="men-banner" />}
      <ProductsFilter products={products} />
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
      <div className="mx-auto mt-20 w-fit">
        {/*"TASK": Create Pagination (8 products in each page) */}
        <Button>Explore More</Button>
      </div>
    </div>
  );
}

export default CollectionSection;
