import { useState } from 'react';
import { HiServerStack, HiShoppingCart } from 'react-icons/hi2';
import { Link, Outlet, redirect } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useAuth } from '../context/AuthContext';

function AdminPanel() {
  const pathname = document.location.pathname;
  const [active, setActive] = useState(pathname);
  const { user } = useAuth();

  if (!user) {
    redirect('/login');
    // return <Spinner title="Redirecting..." />;
  }

  if (!user) return <Spinner title="Redirecting..." />;

  return (
    <div className="flex bg-slate-100 max-md:flex-col">
      <div className="flex shrink-0 gap-5 bg-slate-100 p-5 dark:border-gray-900 dark:bg-slate-950 max-md:justify-center md:flex-col md:border-r-2 md:py-10">
        <div
          onClick={() => setActive('/add-product')}
          className={`rounded-md bg-slate-200 p-3 transition-all hover:text-rose-500 dark:bg-slate-700 ${active === '/add-product' && 'text-rose-500'}`}
        >
          <Link to="add-product" className="flex items-center gap-2">
            <HiShoppingCart size={24} />
            Add Product
          </Link>
        </div>
        <div
          onClick={() => setActive('/list-products')}
          className={`rounded-md bg-slate-200 p-3 transition-all hover:text-rose-500 dark:bg-slate-700 ${active === '/list-products' && 'text-rose-500'}`}
        >
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
