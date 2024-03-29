import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white py-2 shadow-sm dark:bg-slate-800">
      <div className="container flex items-center justify-between">
        <Logo />
        <ul className="hidden items-center gap-5 lg:flex">
          <NavLinks />
        </ul>
        <UserLinks />
      </div>
    </nav>
  );
}

export default Navbar;
