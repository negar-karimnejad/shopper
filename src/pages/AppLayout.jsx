import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function AppLayout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
