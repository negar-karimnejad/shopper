import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function AppLayout() {
  return (
    <div className="w-full h-[60rem] bg-slate-200 dark:bg-slate-700">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
