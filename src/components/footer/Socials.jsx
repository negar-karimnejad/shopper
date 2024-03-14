import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const Social = ({ icon, color }) => {
  return (
    <div
      className={`cursor-pointer text-2xl transition-all hover:scale-105 hover:text-${color}-500`}
    >
      {icon}
    </div>
  );
};

function Socials() {
  return (
    <div className="flex gap-5">
      <Social icon={<FaPinterest />} color="rose" />
      <Social icon={<FaInstagram />} color="rose" />
      <Social icon={<FaWhatsapp />} color="green" />
    </div>
  );
}

export default Socials;
