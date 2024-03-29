import { RiAdminLine } from 'react-icons/ri';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function AdminPanelIcon() {
  const { user } = useAuth();

  if (user?.user?.id !== '585190b7-5a1a-42b1-b31a-e1ac4081d994') return;

  return (
    <Link
      to="/add-product"
      className="h-10 w-10 cursor-pointer rounded-full bg-slate-200 p-2 dark:bg-slate-600"
    >
      <RiAdminLine size={24} />
    </Link>
  );
}

export default AdminPanelIcon;
