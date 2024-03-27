import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useProduct } from '../../context/ProductContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import Button from '../Button';
import Spinner from '../Spinner';
import Star from './Star';

const sizes = ['S', 'M', 'L', 'Xl', 'XXL'];

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
  const [productSize, setProductSize] = useState('');

  const { user } = useAuth();
  const { product } = useProduct();
  const { addToCart } = useCart();

  const selectSize = (size) => {
    setProductSize(size);
  };

  const clickHandler = async () => {
    if (!user) {
      toast.error('Please Login first to continue');
      return;
    }
    if (!productSize) {
      toast.error('Please select size');
      return;
    }
    setLoading(true);

    const newItem = {
      product_id: product.id,
      user_id: user.user.id,
      items: [{ ...product, size: productSize }],
      quantity: 1,
    };
    console.log(product);
    try {
      await addToCart(newItem);
      toast.success('Successfully added');

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
      <p className="mb-4 mt-5 text-xl">Slect Size</p>
      <div className="flex items-center gap-5">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => selectSize(size)}
            className={`${productSize === size ? 'bg-rose-600 text-white' : ''} flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white`}
          >
            {size}
          </div>
        ))}
      </div>
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
