import { HiMoon, HiSun } from "react-icons/hi2";
import useDarkMode from "../hooks/useDarkMode";

function DarkModeButton() {
  const { handleToggle, theme } = useDarkMode();

  return (
    <div className="cursor-pointer bg-slate-200 dark:bg-slate-600 p-2 rounded-full" onClick={handleToggle}>
      {theme === "light" ? <HiSun size={24} /> : <HiMoon size={24} />}
    </div>
  );
}

export default DarkModeButton;
