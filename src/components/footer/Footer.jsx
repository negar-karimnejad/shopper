import Logo from "../navbar/Logo";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import Socials from "./Socials";

function Footer() {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <Logo />
      <FooterLinks />
      <Socials />
      <Copyright />
    </div>
  );
}

export default Footer;
