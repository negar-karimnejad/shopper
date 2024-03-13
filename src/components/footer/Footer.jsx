import Logo from '../navbar/Logo';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import Socials from './Socials';

function Footer() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-8">
      <Logo />
      <FooterLinks />
      <Socials />
      <Copyright />
    </div>
  );
}

export default Footer;
