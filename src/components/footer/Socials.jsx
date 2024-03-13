import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

function Socials() {
  return (
    <div className="flex gap-5">
      <FaPinterest
        size={24}
        className="cursor-pointer transition-all hover:text-red-600"
      />
      <FaInstagram
        size={24}
        className="cursor-pointer transition-all hover:text-rose-500"
      />
      <FaWhatsapp
        size={24}
        className="cursor-pointer transition-all hover:text-green-500"
      />
    </div>
  );
}

export default Socials;
