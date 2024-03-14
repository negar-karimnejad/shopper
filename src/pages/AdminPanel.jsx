import { HiServerStack, HiShoppingCart } from 'react-icons/hi2';
import { Link, Outlet } from 'react-router-dom';

function AdminPanel() {
  return (
    <div className="flex bg-slate-100">
      <div className="flex w-64 flex-col gap-5 border-r-2 bg-slate-100 p-5 py-10 dark:border-gray-900 dark:bg-slate-950">
        <div className="rounded-md bg-slate-200 p-3 transition-all hover:text-rose-500 dark:bg-slate-700">
          <Link to="add-product" className="flex items-center gap-2">
            <HiShoppingCart size={24} />
            Add Product
          </Link>
        </div>
        <div className="rounded-md bg-slate-200 p-3 transition-all hover:text-rose-500 dark:bg-slate-700">
          <Link to="list-products" className="flex items-center gap-2">
            <HiServerStack size={24} />
            Products List
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminPanel;
