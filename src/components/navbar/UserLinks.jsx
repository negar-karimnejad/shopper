import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Button from "../Button";
import NavShoppingCartIcon from "./NavShoppingCartIcon";

function UserLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden items-center gap-5 md:flex">
        <Button>Login</Button>
        <NavShoppingCartIcon />
      </div>
      <div
        className="hidden cursor-pointer transition-all duration-500 max-md:block"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <HiXMark size={30} /> : <HiBars3 size={30} />}
      </div>
    </>
  );
}

export default UserLinks;
