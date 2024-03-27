import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <div className="flex h-screen flex-col justify-between bg-white font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
