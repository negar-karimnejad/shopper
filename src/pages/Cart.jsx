import CartTotals from '../components/cart/CartTotals';
import Coupon from '../components/cart/Coupon';
import CartItems from '../components/cart/CartItems';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { getCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    getCart(user.id);
  }, [getCart, user.id]);
  
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
