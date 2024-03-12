import { useState } from "react";
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
    <ul className="lg:flex hidden items-center gap-5">
      {navigation.map((item) => (
        <li
          key={item.name}
          className={`${
            current === item.name
              ? "border-2 border-slate-50 border-b-pink-600 dark:border-slate-800 dark:border-b-pink-600"
              : ""
          } border-2 border-slate-50 dark:border-slate-800 text-slate-700 dark:text-slate-300 dark:hover:text-white p-0.5 font-bold hover:border-2 hover:border-slate-50 hover:border-b-pink-600 dark:hover:border-slate-800 dark:hover:border-b-pink-600`}
          onClick={() => setCurrent(item.name)}
        >
          <Link to={item.to}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
