import { useState } from 'react';
import Button from '../Button';
import toast from 'react-hot-toast';

function NewsLetter() {
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('please enter your email');
      return;
    }
    toast.success(`"${email.split('@')[0]}" have subscribed successfully`);
    setEmail('');
  };

  return (
    <div className="container mt-32">
      <div className="bg-gradient-to-b from-rose-50 px-5 py-10 dark:from-slate-950">
        <div className="flex w-full flex-col items-center gap-5">
          <h2 className="mb-5 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
            Get Ecclusive Offers On Your Email
          </h2>
          <form onSubmit={submitHandler} className="flex flex-col items-center">
            <label
              htmlFor=""
              className="text-center text-sm text-slate-500 dark:text-slate-400"
            >
              Subscribe to our newsletter and stay updated.
            </label>
            <div className="mt-5 flex rounded-full border-2 bg-white pl-5">
              <input
                className="text-slate-600 outline-none w-full"
                type="email"
                placeholder="Your email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="black" type="submit">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
