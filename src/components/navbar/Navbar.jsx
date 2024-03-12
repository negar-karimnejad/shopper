import Logo from './Logo';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';

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
