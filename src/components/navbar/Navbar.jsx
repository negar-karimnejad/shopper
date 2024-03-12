import { HiMoon, HiSun } from "react-icons/hi2";
import useDarkMode from "../../hooks/useDarkMode";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
// absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none

function Navbar() {
  const { handleToggle, theme } = useDarkMode();
  return (
    <nav className="flex justify-between items-center bg-slate-50 text-slate-800 dark:text-stone-200 dark:bg-slate-800">
      <Logo />
      <NavLinks />
      <UserLinks />
      <div className="cursor-pointer" onClick={handleToggle}>
        {theme === "light" ? <HiSun size={24} /> : <HiMoon size={24} />}
      </div>
    </nav>
  );
}

export default Navbar;
