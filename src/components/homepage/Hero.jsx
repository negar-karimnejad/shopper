import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-rose-50 dark:from-slate-950 max-md:py-10">
      <div className="container flex flex-col items-center justify-between gap-y-10 md:flex-row">
        <div className="flex-1 shrink-0 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <p className="mb-5 text-lg font-bold">NEW ARRIVALS ONLY</p>
          <h2 className="text-5xl font-bold lg:text-7xl">
            new👋 <br /> collections
            <br /> for everyone
          </h2>
          <div className="mt-14 w-5/6 text-lg lg:w-2/3">
            <Button
              variant="secondary"
              onClick={() => navigate('/products/latest')}
            >
              Latest collection <span className="text-2xl">&rarr;</span>
            </Button>
          </div>
        </div>
        <div className="mb-12 flex-1 lg:mb-0">
          <img src="images/hero_image.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
