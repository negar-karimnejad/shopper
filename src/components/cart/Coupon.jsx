import Button from '../Button';
import Input from '../Input';

function Coupon() {
  return (
    <div className="flex-1">
      <p className="text-slate-500">If you have a promo code, Enter it here.</p>
      <form className="mt-4 flex">
        <Input type="text" placeholder="promo code" />
        <div>
          <Button variant="blackLessRound">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Coupon;
