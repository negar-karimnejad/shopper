import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

function NavShoppingCartIcon() {
  const { totalQuantity } = useCart();
  const { user } = useAuth();
  if (!user) return;

  return (
    <div className="relative rounded-full bg-slate-200 p-2 dark:bg-slate-600">
      <Link to="cart">
        <HiOutlineShoppingCart size={24} />
        <div className="absolute -right-0.5 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 pt-0.5 text-sm text-white">
          {totalQuantity}
        </div>
      </Link>
    </div>
  );
}

export default NavShoppingCartIcon;
