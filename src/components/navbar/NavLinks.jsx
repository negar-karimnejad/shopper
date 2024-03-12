import  { useState } from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  const [current, setCurrent] = useState("Shop");

  const navigation = [
    { name: "Shop", to: "/" },
    { name: "Men", to: "men" },
    { name: "Women", to: "women" },
    { name: "Kids", to: "kids" },
  ];

  return (
    <ul className="items-center gap-5 md:flex hidden">
      {navigation.map((item) => (
        <li
          key={item.name}
          className={`${
            current === item.name ? "border-2 bordersl border-b-red-600" : ""
          }`}
          onClick={() => setCurrent(item.name)}
        >
          <Link to={item.to}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
