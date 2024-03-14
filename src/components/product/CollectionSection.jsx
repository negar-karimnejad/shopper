import Button from '../Button';
import ProductCard from './ProductCard';
import ProductsList from './ProductsList';
import ProductsFilter from './ProductsFilter';

function CollectionSection() {
  return (
    <div className="container pt-10">
      <img src="images/banner_mens.png" alt="men-banner" />
      <ProductsFilter />
      <ProductsList>
        {Array.from({ length: 12 }).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
      <div className="mx-auto mt-20 w-fit">
        <Button>Explore More</Button>
      </div>
    </div>
  );
}

export default CollectionSection;
