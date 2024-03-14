import Button from '../Button';

function Offers() {
  return (
    <div className="container mt-32">
      <div className="bg-gradient-to-b from-rose-50 p-10 dark:from-slate-950">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-10 md:flex-row">
          <div className="flex-1">
            <img
              src="images/exclusive_image.png"
              className="w-full lg:w-2/3"
              alt=""
            />
          </div>
          <div className="flex-1 shrink-0 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
            <h2 className="text-5xl font-bold lg:text-7xl">
              Exclusive <br /> Offers For You
            </h2>
            <p className="my-5 font-bold uppercase lg:text-lg">
              only on best sellers products
            </p>
            <div className="w-5/6 text-lg lg:w-2/3">
              <Button variant="secondary">Check now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
