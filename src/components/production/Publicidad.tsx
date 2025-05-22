import Navbar from "../../layout/Navbar";

const Publicidad = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de título y descripción */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">Publicidad</h1>
        <p className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto">
          En Pineda Photography creamos producciones publicitarias impactantes para potenciar 
          la identidad de tu marca y atraer a tu audiencia con contenido audiovisual de alta calidad.
        </p>
      </div>

      {/* Sección de videos en grilla responsiva */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Presentación de candidatas al certamen de Miss Universe Guanacaste
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/PRESENTACIONMU.jpg"
              alt="Presentación de candidatas Miss Universe Guanacaste"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/DF-2H3Wuiw1/?igsh=aDFhYW84YzJ4YWtq"  // Aquí irá la URL del reel
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
            En febrero del 2025 fuimos parte del equipo de prensa para la presentación de candidatas al certamen de Miss Universe Guanacaste 
            en el castillo de Lilo. Este contenido publicitario resume lo que fue esta experiencia.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            La historia de Rochita, interpretada por Elizabeth Cabalceta
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/ELIZABETH.jpg"
              alt="La historia de Rochita, interpretado por Elizabeth Cabalceta"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/DDxOxp8poq5/?igsh=MTV6MHc4djljcW03dQ=="  // Aquí irá la URL del reel
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
            Un video promocional para Elizabeth, quien en ese entonces era candidata de las fiestas típicas nacionales 2025. Este
            trabajo combina la historia de una mujer luchadora con diferentes lugares de interés del cantón de Santa Cruz.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contenido publicitario para Hotel Cañon de la Vieja Lodge
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/CANON.jpg"
              alt="Contenido publicitario para Hotel Cañon de la Vieja Lodge"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/DFf3lopp85o/?igsh=OG1wc291ODI5bXJm"  // Aquí irá la URL del reel
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
            Durante el invierno del año 2024 estuvimos a cargo de la grabación de algunas actividades y habitaciones que ofrece
            el Hotel Cañon de la Vieja Lodge, ubicado a 15 minutos de la ciudad de Liberia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publicidad;
