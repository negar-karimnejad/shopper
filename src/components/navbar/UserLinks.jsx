import React, { useState } from "react";
import { HiBars3, HiOutlineShoppingCart, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

function UserLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="items-center gap-5 md:flex hidden">
        <button className="bg-pink-700 rounded-full py-2 px-6 font-semibold text-md transition-all hover:bg-pink-600">
          Login
        </button>
        <Link to="cart">
          <HiOutlineShoppingCart />
        </Link>
      </div>
      <div
        className="cursor-pointer max-md:block hidden transition-all duration-500"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <HiXMark size={30} /> : <HiBars3 size={30} />}
      </div>
    </>
  );
}

export default UserLinks;
