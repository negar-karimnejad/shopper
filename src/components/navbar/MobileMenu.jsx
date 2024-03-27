import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import DarkModeButton from '../DarkModeButton';
import Divide from '../Divide';
import NavLinks from './NavLinks';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import NavShoppingCartIcon from './NavShoppingCartIcon';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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
    <div className="hidden cursor-pointer transition-all duration-500 max-lg:block">
      <div className="flex items-center gap-4">
        <NavShoppingCartIcon />

        <div onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <HiXMark size={30} /> : <HiBars3 size={35} />}
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-2 z-10 mt-2 w-60 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
          <header className="flex items-center justify-between">
            <DarkModeButton />
            <img
              className="h-9 w-9 shadow-lg"
              src="images/logo_big.png"
              alt="logo"
            />
          </header>
          <Divide />
          <ul
            className="my-7 flex flex-col gap-3 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <NavLinks />
          </ul>

          <footer
            className="flex flex-col gap-2"
            onClick={() => setIsOpen(false)}
          >
            {user ? (
              <Button onClick={handleSignOut}>Logout</Button>
            ) : (
              <>
                <Button onClick={() => navigate('/login')}>Login</Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate('/register')}
                >
                  Register
                </Button>
              </>
            )}
          </footer>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
