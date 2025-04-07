import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Evitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="bg-black text-white py-4 md:py-6 shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center w-full px-2 md:px-8 lg:px-12">
        
        {/* Logo como botón de retorno - Ajustado para mejor responsividad */}
        <div 
          className="flex items-center cursor-pointer flex-shrink-0"
          onClick={() => navigate(-1)}
        >
          <img 
            src="/images/Logo-PinedaPhotographysinFondo.jpeg" 
            alt="Logo Pineda" 
            className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
          />
          <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide ml-2 md:ml-4">
            Pineda Photography
          </h1>
        </div>

        {/* Menú en pantallas medianas y grandes */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-lg lg:text-xl font-semibold items-center">
          <li>
            <Link to="/" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-3 py-2 lg:px-6 lg:py-3 rounded-lg transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-3 py-2 lg:px-6 lg:py-3 rounded-lg transition duration-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/productions" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-3 py-2 lg:px-6 lg:py-3 rounded-lg transition duration-300">
              Producciones
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:bg-black hover:text-white hover:border-2 hover:border-yellow-300 px-3 py-2 lg:px-6 lg:py-3 rounded-lg transition duration-300">
              Contacto
            </Link>
          </li>
          {/* Redes sociales en escritorio */}
          <li className="flex items-center space-x-2 lg:space-x-3">
            <a href="https://www.facebook.com/share/14zJZTcE3H/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl lg:text-2xl hover:text-yellow-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/pineda_photography_cr?igsh=MWRrcTV3cDcxY2hmNA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl lg:text-2xl hover:text-yellow-400 transition duration-300" />
            </a>
          </li>
        </ul>

        {/* Botón de menú para móviles */}
        <button 
          className="md:hidden text-3xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center z-50">
          <button 
            className="absolute top-4 right-4 text-4xl text-white"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          
          <ul className="flex flex-col items-center space-y-8 text-xl text-white">
            <li className="w-full text-center">
              <Link 
                to="/" 
                className="block w-full hover:bg-black hover:border-2 hover:border-yellow-300 px-8 py-3 rounded-lg transition duration-300" 
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li className="w-full text-center">
              <Link 
                to="/services" 
                className="block w-full hover:bg-black hover:border-2 hover:border-yellow-300 px-8 py-3 rounded-lg transition duration-300" 
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li className="w-full text-center">
              <Link 
                to="/productions" 
                className="block w-full hover:bg-black hover:border-2 hover:border-yellow-300 px-8 py-3 rounded-lg transition duration-300" 
                onClick={() => setMenuOpen(false)}
              >
                Producciones
              </Link>
            </li>
            <li className="w-full text-center">
              <Link 
                to="/contact" 
                className="block w-full hover:bg-black hover:border-2 hover:border-yellow-300 px-8 py-3 rounded-lg transition duration-300" 
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            {/* Redes sociales en móviles */}
            <li className="flex space-x-8 mt-4">
              <a href="https://www.facebook.com/share/14zJZTcE3H/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-yellow-400 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/pineda_photography_cr?igsh=MWRrcTV3cDcxY2hmNA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-yellow-400 transition duration-300" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;