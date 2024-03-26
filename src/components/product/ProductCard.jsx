import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utilities/formatCurrency';
import Button from '../Button';
import Spinner from '../Spinner';
import Star from './Star';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { user } = useAuth();
  const { addToCart } = useCart();

  const clickHandler = () => {
    if (!user) {
      toast.error('Please Login first to continue');
    }

    const newItem = {
      product_id: product.id,
      user_id: user.user.id,
      items: [{ ...product }],
      quantity: 1,
    };

    addToCart(newItem);
  };

  if (!product) return <Spinner title="Loading..." />;

  return (
    <div className="flex flex-col gap-5 overflow-hidden rounded-lg border pb-5 font-semibold shadow-md transition-all duration-300 hover:scale-105 dark:border-slate-700/50 dark:bg-slate-800 dark:font-normal">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="product" />
        <p className="mt-5 px-3 leading-5">{product.title}</p>
      </Link>
      <div className="text-md flex flex-1 items-center justify-between gap-5 px-3 text-lg">
        <p className="text-md">{formatCurrency(product?.price)}</p>
        <div className="text-md ">
          <Star rating={product?.rating} />
        </div>
      </div>
      <div className="flex-1 px-5">
        <Button onClick={clickHandler} variant="secondaryLessRound">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
