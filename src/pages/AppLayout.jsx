import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col justify-between font-medium text-slate-700 dark:text-slate-200">
      <div>
        <Navbar />
        {/* <div className="container"> */}
          <Outlet />
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
