import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="flex sm:gap-5 gap-3">
      <Link to="">Company</Link>
      <Link to="">Products</Link>
      <Link to="">Offices</Link>
      <Link to="">About</Link>
      <Link to="">Contact</Link>
    </div>
  );
}

export default FooterLinks;
