import { useProduct } from '../../context/ProductContext';
import SectionHeader from '../homepage/SectionHeader';
import ProductCard from './ProductCard';
import ProductsList from './ProductsList';

function RelatedProducts() {
  const { product, menProducts, womenProducts, kidsProducts } = useProduct();
  
  const products =
    (product.category === 'kid' && kidsProducts) ||
    (product.category === 'women' && womenProducts) ||
    (product.category === 'men' && menProducts);

  return (
    <div className="container">
      <SectionHeader title="related products" />
      <ProductsList>
        {products.slice(0,4).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
    </div>
  );
}

export default RelatedProducts;
