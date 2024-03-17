import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Products', to: '/products/newest', current: '' },
  { name: 'Offices', to: '/offices', current: '' },
  { name: 'About', to: '/about-us', current: '' },
  { name: 'Contact', to: '/conatct', current: '' },
];

function FooterLinks() {
  return (
    <div className="flex gap-3 sm:gap-5">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          className="border-2 border-white pb-1 transition-all hover:border-b-2 hover:border-b-rose-600 dark:border-slate-900 dark:hover:border-b-rose-600"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default FooterLinks;
