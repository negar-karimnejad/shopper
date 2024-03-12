import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

function NavShoppingCartIcon() {
  return (
    <div className="relative">
      <Link to="cart">
        <HiOutlineShoppingCart size={24} />
        <div className="absolute -right-2.5 -top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600">
          3
        </div>
      </Link>
    </div>
  );
}

export default NavShoppingCartIcon;
