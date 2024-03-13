import { Link } from 'react-router-dom';
import Button from '../Button';
import DarkModeButton from '../DarkModeButton';
import MobileMenu from './MobileMenu';
import NavShoppingCartIcon from './NavShoppingCartIcon';

function UserLinks() {
  return (
    <>
      <div className="hidden items-center gap-4 lg:flex">
        <DarkModeButton />
        <NavShoppingCartIcon />
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>

      <MobileMenu />
    </>
  );
}

export default UserLinks;
