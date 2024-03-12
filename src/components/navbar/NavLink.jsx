import { useNavigate } from 'react-router-dom';

function NavLink({ item }) {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(item.to)}
      className={`${
        item.current === pathname
          ? 'border-2 border-white border-b-rose-600 dark:border-slate-800 dark:border-b-rose-600'
          : ''
      } cursor-pointer border-2 border-white p-0.5 font-bold transition-all hover:border-2 hover:border-white hover:border-b-rose-600 dark:border-slate-800 dark:hover:border-slate-800 dark:hover:border-b-rose-600 dark:hover:text-white`}
    >
      {item.name}
    </li>
  );
}

export default NavLink;
