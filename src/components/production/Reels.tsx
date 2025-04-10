import Navbar from "../../layout/Navbar";

const Reels = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de título y descripción */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">Reels</h1>
        <p className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto">
          En Pineda Photography creamos Reels publicitarios con impacto visual para redes sociales. 
          Perfectos para emprendedores, marcas y negocios que buscan conectar con su audiencia de 
          manera creativa y rápida.
        </p>
      </div>

      {/* Sección de Reels en grilla responsiva */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        
        {/* Card 1 - Detrás de cámara de una propuesta de matrimonio */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Detrás de cámara de una propuesta de matrimonio
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img
              src="/images/producciones/PROPUESTA.jpg"
              alt="Detrás de cámara de una propuesta de matrimonio"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/DIIKSX_sY7N/?igsh=ZDNnNnU0cDNzc213"  // Aquí irá la URL del reel
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:border-2 hover:border-yellow-300 transition duration-300">
                  Ver video
                </button>
              </a>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Las fotos más especiales son aquellas que capturan emociones reales; en esta propuesta de matrimonio, 
            nos escondimos sin que la novia lo supiera, obteniendo momentos llenos de emoción y una reacción inolvidable.
          </p>
        </div>

        {/* Card 2 - Decoración para boda con productora Blue Magic */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Un día de trabajo en la isla más poblada de Costa Rica
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img
              src="/images/producciones/CHIRA.jpg"
              alt="Decoración para boda con productora Blue Magic"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="#"  // Aquí irá la URL del reel
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:border-2 hover:border-yellow-300 transition duration-300">
                  Ver video
                </button>
              </a>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Acá les compartimos un pequeño vlog de lo que es trabajar en la isla Chira, dentro del corto veremos como es el viaje y
            como son algunos de los diversos pueblos que tiene la isla Chira y muy poca gente conoce.
          </p>
        </div>

        {/* Card 3 - Backstage de una gala final de Miss Universe */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Backstage de una gala final de Miss Universe
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img
              src="/images/producciones/GALAFINAL.jpg"
              alt="Backstage de una gala final de Miss Universe"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="#"  // Aquí irá la URL del reel
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:border-2 hover:border-yellow-300 transition duration-300">
                  Ver video
                </button>
              </a>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Un pequeño vistazo a lo que sucede detrás de cámaras en una gala final de Miss Universe, 
            desde la preparación de las candidatas hasta los momentos más emocionantes del evento, 
            además de un vistazo a la rutina del equipo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reels;
