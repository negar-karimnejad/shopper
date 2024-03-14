import { Link } from 'react-router-dom';
import { HiServerStack, HiShoppingCart } from 'react-icons/hi2';

function ListProducts() {
  return (
    <div className="flex pt-10">
      <div className="flex w-64 flex-col gap-5 p-5">
        <div className="rounded-md bg-slate-100 p-3">
          <Link to="" className='flex items-center gap-2'>
            <HiShoppingCart size={24} />
            Add Product
          </Link>
        </div>
        <div className="rounded-md bg-slate-100 p-3">
          <Link to="" className='flex items-center gap-2'>
            <HiServerStack size={24} />
            Products List
          </Link>
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <div className="bg-white">
          <h2>All Products List</h2>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
