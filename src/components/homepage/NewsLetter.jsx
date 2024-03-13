import Button from '../Button';

function NewsLetter() {
  return (
    <div className="container mt-32">
      <div className="bg-gradient-to-b from-rose-50 px-5 py-10 dark:from-slate-950">
        <div className="flex w-full flex-col items-center gap-5">
          <h2 className="mb-5 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
            Get Ecclusive Offers On Your Email
          </h2>
          <form className="flex flex-col items-center">
            <label htmlFor="" className="text-center text-sm text-slate-500">
              Subscribe to our newsletter and stay updated.
            </label>
            <div className="mt-5 flex rounded-full border-2 pl-5 bg-white">
              <input type="text" placeholder="Your email id" />
              <Button varient="black">Subscribe</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
