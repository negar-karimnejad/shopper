import Button from '../Button';
import Spinner from '../Spinner';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import ProductsList from './ProductsList';

function CollectionSection({ products, banner }) {
  if (!products.length) return <Spinner />;

  return (
    <div className="container pt-10">
      <img src={banner} alt="men-banner" />
      <ProductsFilter />
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
      <div className="mx-auto mt-20 w-fit">
        <Button>Explore More</Button>
      </div>
    </div>
  );
}

export default CollectionSection;
