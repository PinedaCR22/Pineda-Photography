import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-14 shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center w-full px-12">
        
        {/* Logo como botón de retorno */}
        <div className="flex items-center absolute left-12 cursor-pointer" onClick={() => navigate(-1)}>
          <img 
            src="/images/Logo-PinedaPhotographysinFondo.jpeg" 
            alt="Logo Pineda" 
            className="h-24 w-24 object-contain"
          />
          <h1 className="text-4xl font-bold tracking-wide ml-6">Pineda Photography</h1>
        </div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-12 text-2xl font-semibold absolute right-12 items-center">
          <li>
            <Link to="/" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-8 py-5 rounded-lg transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-8 py-5 rounded-lg transition duration-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/productions" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-8 py-5 rounded-lg transition duration-300">
              Producciones
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link to="/contact" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-8 py-5 rounded-lg transition duration-300">
              Contacto
            </Link>
            {/* Redes sociales en escritorio a la derecha del botón Contacto */}
            <div className="flex flex-col items-center space-y-2">
              <a href="https://www.facebook.com/share/14zJZTcE3H/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-black transition duration-300" />
              </a>
              <a href="https://www.instagram.com/pineda_photography_cr?igsh=MWRrcTV3cDcxY2hmNA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-black transition duration-300" />
              </a>
            </div>
          </li>
        </ul>

        {/* Botón de menú para móviles */}
        <button 
          className="md:hidden text-5xl focus:outline-none absolute right-12" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <button 
            className="absolute top-5 right-5 text-6xl text-white"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          
          <ul className="space-y-12 text-3xl text-white">
            <li>
              <Link to="/" className="hover:bg-gray-700 hover:border-2 hover:border-yellow-300 px-12 py-6 rounded-lg transition duration-300" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:bg-gray-700 hover:border-2 hover:border-yellow-300 px-12 py-6 rounded-lg transition duration-300" onClick={() => setMenuOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/productions" className="hover:bg-gray-700 hover:border-2 hover:border-yellow-300 px-12 py-6 rounded-lg transition duration-300" onClick={() => setMenuOpen(false)}>
                Producciones
              </Link>
            </li>
            <li className="flex flex-col items-center space-y-4">
              <Link to="/contact" className="hover:bg-gray-700 hover:border-2 hover:border-yellow-300 px-12 py-6 rounded-lg transition duration-300" onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
              {/* Redes sociales en móviles debajo del botón de contacto */}
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/share/14zJZTcE3H/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-4xl hover:text-yellow-400 transition duration-300" />
                </a>
                <a href="https://www.instagram.com/pineda_photography_cr?igsh=MWRrcTV3cDcxY2hmNA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-4xl hover:text-yellow-400 transition duration-300" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
