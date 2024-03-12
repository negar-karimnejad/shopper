import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Button from '../Button';
import NavShoppingCartIcon from './NavShoppingCartIcon';
import DarkModeButton from '../DarkModeButton';
import NavLinks from './NavLinks';
import Divide from '../Divide';

function UserLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden items-center gap-4 lg:flex">
        <DarkModeButton />
        <NavShoppingCartIcon />
        <Button>Login</Button>
      </div>
      <div
        className="hidden cursor-pointer transition-all duration-500 max-lg:block"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <HiXMark size={30} /> : <HiBars3 size={35} />}
        <div className="absolute right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
          <DarkModeButton />
          <Divide />
          <ul className="mb-5 flex flex-col items-center gap-1 lg:hidden">
            <NavLinks />
          </ul>
          <div className="flex flex-col gap-2">
            <Button varient="secondary">Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLinks;
