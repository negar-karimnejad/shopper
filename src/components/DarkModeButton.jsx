import { HiMoon, HiSun } from 'react-icons/hi2';
import useDarkMode from '../hooks/useDarkMode';

function DarkModeButton() {
  const { handleToggle, theme } = useDarkMode();

  return (
    <div
      className="h-10 w-10 cursor-pointer rounded-full bg-slate-200 p-2 dark:bg-slate-600"
      onClick={handleToggle}
    >
      {theme === 'light' ? <HiSun size={24} /> : <HiMoon size={24} />}
    </div>
  );
}

export default DarkModeButton;
