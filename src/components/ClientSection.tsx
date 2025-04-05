import { Link } from "react-router-dom";

const ClientSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start bg-gray-100 py-16 px-8">
      
      {/* Card izquierda - Botones de navegación y Colaboradores */}
      <div className="w-full md:w-[55%] flex flex-col justify-start text-center md:text-left px-6 h-full">
        
        {/* Sección de navegación */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Entérate de todo lo que ofrecemos para ti
        </h2>
        <div className="flex justify-center md:justify-start gap-6">
          <Link
            to="/services"
            className="bg-yellow-600 text-white font-semibold py-3 px-6 w-[150px] rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300 text-center"
          >
            Servicios
          </Link>
          <Link
            to="/productions"
            className="bg-yellow-600 text-white font-semibold py-3 px-6 w-[150px] rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300 text-center"
          >
            Producciones
          </Link>
        </div>

        {/* Botón de contacto */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Ponte en contacto con nosotros y reserva tu cita
        </h2>
        <div className="flex justify-center md:justify-start">
          <Link
            to="/contact"
            className="bg-yellow-600 text-white font-semibold py-3 px-6 w-[150px] rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300 text-center"
          >
            Contacto
          </Link>
        </div>

        {/* Sección de Colaboradores */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 text-center">
          Colaboradores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colaborador 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center h-full">
            <img
              src="/images/Pablo (2).jpeg"
              alt="Chaves Photography"
              className="w-full h-32 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Chaves Photography</h3>
            <p className="text-gray-700 text-sm mt-2">
              "
              Chaves Photography ofrece una visión artística y profesional en fotografía de eventos, 
              retratos y sesiones personalizadas. Su enfoque busca resaltar la naturalidad y emoción en cada imagen, 
              inmortalizando recuerdos con un estilo único y creativo."
            </p>
            <a
              href="https://www.instagram.com/chaves_photography_?igsh=MXdyaTdwNjB4aWRhMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300"
            >
              Ver perfil
            </a>
          </div>

          {/* Colaborador 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center h-full">
            <img
              src="/images/Pablo (1).jpeg"
              alt="Skyscape Adventure"
              className="w-full h-32 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Skyscape Adventure</h3>
            <p className="text-gray-700 text-sm mt-2">
              "
              Captura paisajes impresionantes, aventuras extremas y experiencias inolvidables desde las alturas, 
              mostrando la belleza del mundo desde una nueva perspectiva."
            </p>
            <a
              href="https://skyscape-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300"
            >
              Visitar sitio web
            </a>
          </div>
        </div>
      </div>

      {/* Card derecha - Clientes con los que hemos trabajado */}
      <div className="w-full md:w-[45%] flex flex-col justify-start items-center mt-8 md:mt-0 h-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Empresas con las que hemos trabajado
        </h2>
        <div className="w-full flex justify-center">
          <img
            src="/images/CLIENTES.jpeg"
            alt="Clientes con los que hemos trabajado"
            className="w-full md:h-[650px] max-h-[650px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
