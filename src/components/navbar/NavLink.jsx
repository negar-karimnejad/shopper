import { useNavigate } from 'react-router-dom';

function NavLink({ item }) {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(item.to)}
      className={`${
        item.current === pathname
          ? 'border-b-2 border-b-rose-600 dark:border-b-rose-600'
          : ''
      } cursor-pointer border-b-0 border-l-0 border-r-0 border-t-0 p-0.5 font-bold transition-colors hover:border-b-rose-600 dark:hover:border-b-rose-600 dark:hover:text-white`}
    >
      {item.name}
    </li>
  );
}

export default NavLink;
