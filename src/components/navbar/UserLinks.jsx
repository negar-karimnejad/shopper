import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button';
import DarkModeButton from '../DarkModeButton';
import MobileMenu from './MobileMenu';
import NavShoppingCartIcon from './NavShoppingCartIcon';
import toast from 'react-hot-toast';

function UserLinks() {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('You logged out successfully');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <>
      <div className="hidden items-center gap-4 lg:flex">
        <DarkModeButton />
        <NavShoppingCartIcon />
        {user?.session ? (
          <Button onClick={handleSignOut}>Logout</Button>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>

      <MobileMenu />
    </>
  );
}

export default UserLinks;
