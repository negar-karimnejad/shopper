import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  const [current, setCurrent] = useState('Shop');

  const navigation = [
    { name: 'Shop', to: '/' },
    { name: 'Men', to: 'men' },
    { name: 'Women', to: 'women' },
    { name: 'Kids', to: 'kids' },
  ];

  return (
    <>
      {navigation.map((item) => (
        <li
          key={item.name}
          className={`${
            current === item.name
              ? 'border-2 border-white border-b-rose-600 dark:border-slate-800 dark:border-b-rose-600'
              : ''
          } border-2 border-white p-0.5  font-bold transition-all hover:border-2 hover:border-white hover:border-b-rose-600 dark:border-slate-800 dark:hover:border-slate-800 dark:hover:border-b-rose-600 dark:hover:text-white`}
          onClick={() => setCurrent(item.name)}
        >
          <Link to={item.to}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
