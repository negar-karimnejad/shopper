import Button from '../Button';
const style =
  'flex justify-between border-b py-4 text-slate-500 dark:text-slate-400';

function CartTotals() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <h2 className="mb-10 text-2xl font-bold">Cart Totals</h2>
      <div className={style}>
        <p>Subtotal</p>
        <p>$82</p>
      </div>
      <div className={style}>
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <div className="mb-8 flex justify-between py-4 text-lg font-bold">
        <p>Total</p>
        <p>$82</p>
      </div>
      <div className="w-fit">
        <Button variant="secondaryLessRound">PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
}

export default CartTotals;
