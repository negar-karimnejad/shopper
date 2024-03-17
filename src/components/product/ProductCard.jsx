import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

function ProductCard({ product }) {
  if (!product) return <Spinner />;

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
    >
      <img src={product.image} alt="product" />
      <p className="leading-5">{product.title}</p>
      <div className="text-md flex gap-5 text-lg">
        <p>{product?.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
