import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import toast from 'react-hot-toast';

function Coupon() {
  const [promo, setPromo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    toast.error('Promo code is invalid');
    setPromo('');
  };

  return (
    <div className="flex-1">
      <p className="text-slate-500">If you have a promo code, Enter it here.</p>
      <form className="mt-4 flex" onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="promo code"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
        />
        <div>
          <Button variant="blackLessRound" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Coupon;
