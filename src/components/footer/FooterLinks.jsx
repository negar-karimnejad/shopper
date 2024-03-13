import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Company', to: '', current: '' },
  { name: 'Products', to: '', current: '' },
  { name: 'Offices', to: '', current: '' },
  { name: 'About', to: '', current: '' },
  { name: 'Contact', to: '', current: '' },
];

function FooterLinks() {
  return (
    <div className="flex gap-3 sm:gap-5">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          className="border-2 transition-all border-white pb-1 hover:border-b-2 hover:border-b-rose-600 dark:border-slate-900 dark:hover:border-b-rose-600"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default FooterLinks;
