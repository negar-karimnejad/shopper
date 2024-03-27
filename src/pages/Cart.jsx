import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import CartItems from '../components/cart/CartItems';
import CartTotals from '../components/cart/CartTotals';
import Coupon from '../components/cart/Coupon';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Cart() {
  const navigate = useNavigate();
  const { state } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.session) return navigate('/login');
  }, [navigate, user?.session]);

  if (!user?.session) return <Spinner title="Redirecting..." />;

  if (state?.length === 0)
    return (
      <div className="container flex h-[14rem] items-center justify-center pt-10 text-xl max-sm:h-[22rem]">
        <p className="border-b border-slate-500 p-3">Your cart is empty 🙁</p>
      </div>
    );

  return (
    <div className="container pt-10">
      <CartItems />
      <div className="mt-20 flex w-full justify-between gap-x-52 gap-y-20 max-lg:flex-col">
        <CartTotals />
        <Coupon />
      </div>
    </div>
  );
}

export default Cart;
