import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
// absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  console.log(theme);

  return (
    <nav className="flex justify-between items-center bg-slate-50 text-slate-800 dark:text-stone-200 dark:bg-slate-800">
      <Logo />
      <NavLinks />
      <UserLinks />
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
