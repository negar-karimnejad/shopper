import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product?.id}`}
      className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
    >
      <img src={product?.image} alt="product" />
      <p className="leading-5">{product?.name}</p>
      <div className="text-md flex gap-5 text-lg">
        <p>{product?.new_price}</p>
        <p className="line-through opacity-60">{product?.old_price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
