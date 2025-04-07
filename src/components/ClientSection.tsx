import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSection = () => {
  // Configuración para el primer carrusel (movimiento hacia la derecha)
  const settingsRight = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Configuración para el segundo carrusel (movimiento hacia la izquierda)
  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true, // Movimiento de derecha a izquierda
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Array de los primeros 10 clientes para el primer carrusel
  const clientsRow1 = [
    { id: 1, name: "FOTOGRAFIARTE.CR", image: "/images/clients/fotografiarte.jpg" },
    { id: 2, name: "Raices Restaurante", image: "/images/clients/raices.jpg" },
    { id: 3, name: "Liceo Experimental Bilingüe", image: "/images/clients/liceo.jpg" },
    { id: 4, name: "Iguana Producciones", image: "/images/clients/iguana.jpg" },
    { id: 5, name: "Feria de Rodeo CADECD", image: "/images/clients/rodeo.jpg" },
    { id: 6, name: "UNA Universidad Nacional", image: "/images/clients/una.jpg" },
    { id: 7, name: "Ensamble Folclórico", image: "/images/clients/ensamble.jpg" },
    { id: 8, name: "AZUL Hotel & Retreat", image: "/images/clients/azul.jpg" },
    { id: 9, name: "Asociación Folklórica", image: "/images/clients/asociacion.jpg" },
    { id: 10, name: "Comité de Cultura", image: "/images/clients/comite.jpg" }
  ];

  // Array de los siguientes 10 clientes para el segundo carrusel
  const clientsRow2 = [
    { id: 11, name: "Hacienda El Viejo", image: "/images/clients/hacienda.jpg" },
    { id: 12, name: "Xirena", image: "/images/clients/xirena.jpg" },
    { id: 13, name: "Paso Tempisque", image: "/images/clients/paso.jpg" },
    { id: 14, name: "Santa Cruz 2024", image: "/images/clients/santacruz.jpg" },
    { id: 15, name: "Producciones El Paraje", image: "/images/clients/paraje.jpg" },
    { id: 16, name: "Cañón de la Vieja", image: "/images/clients/canon.jpg" },
    { id: 17, name: "ADSR", image: "/images/clients/adsr.jpg" },
    { id: 18, name: "M*U Guanacaste", image: "/images/clients/mu.jpg" },
    { id: 19, name: "Blue Magic Events", image: "/images/clients/blue.jpg" },
    { id: 20, name: "Bahía del Sol", image: "/images/clients/bahia.jpg" }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Sección superior - Card con botones y Colaboradores */}
      <div className="w-full flex flex-col lg:flex-row gap-8 mb-12">
        
        {/* Card izquierda - Botones de navegación agrupados */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              ¡Entérate de todo lo que ofrecemos para ti!
            </h2>
            
            <div className="flex flex-row justify-center gap-4 mb-8">
              <Link
                to="/services"
                className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300 text-center min-w-[150px]"
              >
                Servicios
              </Link>
              <Link
                to="/productions"
                className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300 text-center min-w-[150px]"
              >
                Producciones
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-6">
              ¡Ponte en contacto con nosotros y reserva tu servicio!
            </h2>
            
            <Link
              to="/contact"
              className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300 text-center min-w-[150px]"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Card derecha - Colaboradores */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          ¡Nuestros colaboradores!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colaborador 1 */}
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 text-center flex flex-col items-center h-full">
              <img
                src="/images/Pablo (2).jpeg"
                alt="Chaves Photography"
                className="w-full h-32 object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Chaves Photography</h3>
              <p className="text-gray-700 text-sm mt-2">
                "
                Ofrece una visión artística y profesional en fotografía de eventos, 
                su enfoque busca resaltar la emoción en cada imagen, 
                inmortalizando recuerdos con un estilo único y creativo."
              </p>
              <a
                href="https://www.instagram.com/chaves_photography_?igsh=MXdyaTdwNjB4aWRhMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300"
              >
                Ver perfil
              </a>
            </div>

            {/* Colaborador 2 */}
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 text-center flex flex-col items-center h-full">
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
                className="mt-auto bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300"
              >
                Visitar sitio web
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior - Empresas con las que hemos trabajado (Carruseles) */}
      <div className="w-full mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
        ¡Empresas con las que hemos trabajado!
        </h2>
        
        {/* Primer carrusel - Movimiento hacia la derecha */}
        <div className="mb-8 overflow-hidden">
          <Slider {...settingsRight}>
            {clientsRow1.map((client) => (
              <div key={client.id} className="px-2">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-40 mx-auto">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/images/logo-placeholder.png"; // Imagen de respaldo si hay error
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Segundo carrusel - Movimiento hacia la izquierda */}
        <div className="overflow-hidden">
          <Slider {...settingsLeft}>
            {clientsRow2.map((client) => (
              <div key={client.id} className="px-2">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24 w-40 mx-auto">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/images/logo-placeholder.png"; // Imagen de respaldo si hay error
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;