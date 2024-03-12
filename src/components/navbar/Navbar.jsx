import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
import DarkModeButton from "../DarkModeButton";
// absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none

function Navbar() {
  return (
    <nav className=" bg-slate-50 text-slate-800 dark:text-stone-200 dark:bg-slate-800">
      <div className="container flex justify-between items-center">
        <Logo />
        <NavLinks />
        <UserLinks />
        {/* <DarkModeButton /> */}
      </div>
    </nav>
  );
}

export default Navbar;
