import ProductsList from '../components/ProductsList';
import ProductsFilter from '../components/ProductsFilter';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

function CollectionSection() {
  return (
    <div className="container mt-10">
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
