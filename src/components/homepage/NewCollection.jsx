import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

function NewCollection() {
  return (
    <div>
      <SectionHeader title="popular in women" />
      <div className="container grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link
          to=""
          className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
        >
          <img src="images/product_3.png" alt="product" />
          <p className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          </p>
          <div className="text-md flex gap-5 text-lg">
            <p>$70 </p>
            <p className="line-through opacity-60">$120</p>
          </div>
        </Link>
        <Link
          to=""
          className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
        >
          <img src="images/product_3.png" alt="product" />
          <p className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          </p>
          <div className="text-md flex gap-5 text-lg">
            <p>$70 </p>
            <p className="line-through opacity-60">$120</p>
          </div>
        </Link>
        <Link
          to=""
          className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
        >
          <img src="images/product_3.png" alt="product" />
          <p className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          </p>
          <div className="text-md flex gap-5 text-lg">
            <p>$70 </p>
            <p className="line-through opacity-60">$120</p>
          </div>
        </Link>
        <Link
          to=""
          className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
        >
          <img src="images/product_3.png" alt="product" />
          <p className="leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          </p>
          <div className="text-md flex gap-5 text-lg">
            <p>$70 </p>
            <p className="line-through opacity-60">$120</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewCollection;
