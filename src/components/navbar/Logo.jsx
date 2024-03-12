import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        className="h-12 w-12 md:h-14 md:w-14"
        src="images/logo_big.png"
        alt="logo"
      />
      <h1 className="text-3xl font-semibold uppercase md:text-4xl">Shopper</h1>
    </Link>
  );
}

export default Logo;
