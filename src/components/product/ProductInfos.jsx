import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useProduct } from '../../context/ProductContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import Button from '../Button';
import Spinner from '../Spinner';
import ProductSize from './ProductSize';
import Star from './Star';

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
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { product } = useProduct();
  const { addToCart } = useCart();

  const clickHandler = async () => {
    if (!user) {
      toast.error('Please Login first to continue');
      return;
    }
    setLoading(true);

    const newItem = {
      product_id: product.id,
      user_id: user.user.id,
      items: [{ ...product }],
      quantity: 1,
    };

    try {
      await addToCart(newItem);
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
    } finally {
      setLoading(false);
    }
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
        <Button
          disabled={loading}
          onClick={clickHandler}
          variant="secondaryLessRound"
        >
          {loading ? 'Adding...' : 'Add To Cart'}
        </Button>
      </div>
      <StyledP title="Category" description={product.category} />
      <StyledP title="Tags" description="Modern, Latest" />
    </div>
  );
}

export default ProductInfos;
