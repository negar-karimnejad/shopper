import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

function NewCollection() {
  return (
    <div>
      <SectionHeader title="new collections" />
      <div className="container grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((item, index) => (
          <Link
            key={index}
            to=""
            className="flex flex-col gap-3 transition-all duration-300 hover:scale-105"
          >
            <img src="images/product_29.png" alt="product" />
            <p className="leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            </p>
            <div className="text-md flex gap-5 text-lg">
              <p>$70 </p>
              <p className="line-through opacity-60">$120</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
