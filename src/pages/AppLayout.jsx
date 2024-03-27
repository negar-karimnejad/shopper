import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <div className="bg-white dark:bg-slate-900 flex h-screen flex-col justify-between font-medium text-slate-700 dark:text-slate-200">
      <div>
        <Navbar />
        <div className="bg-white dark:bg-slate-900">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
