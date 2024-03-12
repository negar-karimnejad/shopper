import { HiMoon, HiSun } from "react-icons/hi2";
import useDarkMode from "../hooks/useDarkMode";

function DarkModeButton() {
  const { handleToggle, theme } = useDarkMode();

  return (
    <div className="cursor-pointer" onClick={handleToggle}>
      {theme === "light" ? <HiSun size={24} /> : <HiMoon size={24} />}
    </div>
  );
}

export default DarkModeButton;
