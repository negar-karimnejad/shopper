import CartItems from '../components/cart/CartItems';
import CartTotals from '../components/cart/CartTotals';
import Coupon from '../components/cart/Coupon';
import { useCart } from '../context/CartContext';

function Cart() {
  const { state } = useCart();

  if (state?.length === 0)
    return (
      <div className="container flex h-[12rem] items-center justify-center pt-10 text-xl">
        <p className='border-b border-slate-500 p-3'>Your cart is empty 🙁</p>
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
