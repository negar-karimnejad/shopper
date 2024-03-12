import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img className="w-14 h-14" src="images/logo_big.png" alt="" />
      <h1 className="uppercase font-semibold text-4xl">Shopper</h1>
    </Link>
  );
}

export default Logo;
