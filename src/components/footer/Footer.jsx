import Logo from '../navbar/Logo';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import Socials from './Socials';

function Footer() {
  return (
    <div className="pt-20 flex flex-col items-center justify-center gap-8 bg-white dark:bg-slate-900">
      <Logo />
      <FooterLinks />
      <Socials />
      <Copyright />
    </div>
  );
}

export default Footer;
