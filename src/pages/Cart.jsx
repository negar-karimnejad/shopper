import CartItems from '../components/cart/CartItems';
import CartTotals from '../components/cart/CartTotals';
import Coupon from '../components/cart/Coupon';

function Cart() {
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
