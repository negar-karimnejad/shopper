import { useProduct } from '../../context/ProductContext';
import Button from '../Button';
import ProductSize from './ProductSize';
import Star from './Star';
import Spinner from '../Spinner';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const StyledP = ({ title, description }) => {
  return (
    <p>
      <strong>{title} : </strong>
      <span className="text-sm capitalize text-slate-600 dark:text-slate-300">
        {description}
      </span>
    </p>
  );
};

function ProductInfos() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { product } = useProduct();

  const clickHandler = () => {
    if (!user) {
      toast.error('Please Login first to continue');
    }
    
    const newItem = {
      product_id: product.id,
      user_id: user.user.id,
    };

    addToCart(newItem);
  };

  if (!product) return <Spinner title="Loading..." />;

  return (
    <div>
      <h2 className="text-3xl font-bold">{product.title} </h2>
      <Star />
      <div className="my-5 flex gap-5 text-xl font-bold">
        <span className="text-rose-600">{formatCurrency(product.price)}</span>
      </div>
      <p>{product.description}</p>
      <ProductSize />
      <div className="my-8 w-40">
        <Button onClick={clickHandler} variant="secondaryLessRound">
          ADD TO CART
        </Button>
      </div>
      <StyledP title="Category" description={product.category} />
      <StyledP title="Tags" description="Modern, Latest" />
    </div>
  );
}

export default ProductInfos;
