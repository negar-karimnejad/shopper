import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const Social = ({ icon }) => {
  return (
    <div
      className={`cursor-pointer text-2xl text-slate-400 transition-all hover:scale-105 hover:text-slate-500 hover:dark:text-slate-50`}
    >
      {icon}
    </div>
  );
};

function Socials() {
  return (
    <div className="flex gap-5">
      <Social icon={<FaPinterest />} />
      <Social icon={<FaInstagram />} />
      <Social icon={<FaWhatsapp />} />
    </div>
  );
}

export default Socials;
