import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
// absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none

function Navbar() {
  return (
    <nav className="bg-white py-2 dark:bg-slate-800">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavLinks />
        <UserLinks />
      </div>
    </nav>
  );
}

export default Navbar;
