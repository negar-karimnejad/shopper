import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import Button from '../Button';
import ProductSize from './ProductSize';
import Star from './Star';

const StyledP = ({ title, description }) => {
  return (
    <p>
      <strong>{title} : </strong>
      <span className="text-sm text-slate-600 dark:text-slate-300">
        {description}
      </span>
    </p>
  );
};

function ProductInfos() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { id } = useParams();

  const clickHandler = () => {
    const newItem = {
      productId: id,
      quantity: 1,
      price: 123,
      userId: user?.id || '123',
    };
    addToCart(newItem);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
      </h2>
      <Star />
      <div className="my-5 flex gap-5 text-xl font-bold">
        <span className="line-through">$120</span>
        <span className="text-rose-600">$72</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        corporis ea sint debitis molestias amet! Praesentium, repellat
        consectetur.
      </p>
      <ProductSize />
      <div className="my-8 w-40">
        <Button onClick={clickHandler} variant="secondaryLessRound">
          ADD TO CART
        </Button>
      </div>
      <StyledP title="Category" description="Women, T-shirt, Crop Top" />
      <StyledP title="Tags" description="Modern, Latest" />
    </div>
  );
}

export default ProductInfos;
