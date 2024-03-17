import { HiHome, HiMiniChevronRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Breadcrumb({ links }) {
  return (
    <ul className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      <li className="inline-flex items-center">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-rose-600 focus:text-rose-600 focus:outline-none dark:focus:text-rose-500"
        >
          <HiHome />
          Home
        </Link>
      </li>

      {links.map((link) => (
        <li key={link.id} className="inline-flex items-center">
          <HiMiniChevronRight size={18} className="mx-1 opacity-60" />
          <Link
            to={link.to}
            className="flex items-center text-sm font-medium text-slate-500 hover:text-rose-600 focus:text-rose-600 focus:outline-none dark:focus:text-rose-500"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
