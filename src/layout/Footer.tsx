import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-8">
      <p className="text-xl font-bold">¡Somos Pineda Photography!</p>
      <p className="text-lg mb-3">Fotografiando momentos</p>
      <p className="text-lg">
        Email: <a href="mailto:emmanuelplay2233@gmail.com" className="hover:underline">emmapr2233@gmail.com</a>
      </p>
      <p className="text-lg mb-5">
        Tel: <a href="tel:+50685042171" className="hover:underline">(+506) 8504-2171</a>
      </p>

      {/* Íconos de Redes Sociales */}
      <div className="flex justify-center gap-8">
        <a href="https://www.facebook.com/share/14zJZTcE3H/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white text-3xl hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/pineda_photography_cr?igsh=MWRrcTV3cDcxY2hmNA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-3xl hover:text-gray-400 transition duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
