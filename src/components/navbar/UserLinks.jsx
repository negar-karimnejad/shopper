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
        <Button>Login</Button>
      </div>

      <MobileMenu />
    </>
  );
}

export default UserLinks;
