import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa'

function Socials() {
  return (
    <div className="flex gap-5">
    <FaInstagram size={24} />
    <FaPinterest size={24} />
    <FaWhatsapp size={24} />
  </div>
  )
}

export default Socials