import { Link } from 'react-router-dom';

function ProductCard() {
  const id = 6548;
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
    >
      <img src="images/product_3.png" alt="product" />
      <p className="leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
      </p>
      <div className="text-md flex gap-5 text-lg">
        <p>$70 </p>
        <p className="line-through opacity-60">$120</p>
      </div>
    </Link>
  );
}

export default ProductCard;
