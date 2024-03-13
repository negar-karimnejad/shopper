import { HiMiniChevronRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Breadcrumb() {
  return (
    <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      <li className="inline-flex items-center">
        <Link
          to=""
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
        >
          Home
        </Link>
        <HiMiniChevronRight size={18} className="mx-1 opacity-60" />
      </li>
      <li className="inline-flex items-center">
        <Link
          to=""
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
        >
          App Center
          <HiMiniChevronRight size={18} className="mx-1 opacity-60" />
        </Link>
      </li>
      <li
        className="inline-flex items-center truncate text-sm font-semibold text-gray-800 dark:text-gray-200"
        aria-current="page"
      >
        Application
      </li>
    </ol>
  );
}

export default Breadcrumb;
