import DarkModeButton from "../DarkModeButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
// absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none

function Navbar() {
  return (
    <nav className="bg-slate-50 py-2 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavLinks />
        <UserLinks />
        <DarkModeButton />
      </div>
    </nav>
  );
}

export default Navbar;
