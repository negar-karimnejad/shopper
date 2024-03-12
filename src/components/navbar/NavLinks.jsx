import NavLink from './NavLink';

function NavLinks() {
  const navigation = [
    { name: 'Shop', to: '/', current: '/' },
    { name: 'Men', to: 'men', current: '/men' },
    { name: 'Women', to: 'women', current: '/women' },
    { name: 'Kids', to: 'kids', current: '/kids' },
  ];

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink key={index} item={item} />
      ))}
    </>
  );
}

export default NavLinks;
