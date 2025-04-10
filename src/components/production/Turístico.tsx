import Navbar from "../../layout/Navbar";

const Turistico = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de título y descripción */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900">Turísticos</h1>
        <p className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto">
          En Pineda Photography capturamos la esencia de cada destino con videos turísticos.
          Desde paisajes exóticos hasta experiencias culturales, convertimos cada viaje en una producción visual inolvidable.
        </p>
      </div>

      {/* Sección de videos en grilla responsiva */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        
        {/* Card 1 - Sobrevolando el Lago Atitlan, Guatemala */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sobrevolando el Lago Atitlan, Guatemala
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/ATITLAN.jpg"
              alt="Sobrevolando el Lago Atitlan, Guatemala"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/C9ijXhlv4ah/?igsh=bWd6MXN3cnNuYTFh"
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
            En el verano de 2024 estuvimos de viaje por Guatemala, en este viaje realizamos varias tomas con drone
            desde los diferentes pueblos como Panajachel, San Pedro, San Juan y San Marcos.
          </p>
        </div>

        {/* Card 2 - Guanacaste, la tierra prometida */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Guanacaste, la tierra prometida
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/GUANACASTE.jpg"
              alt="Guanacaste, la tierra prometida"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/DCiFHKKpaCc/?igsh=bWFkcTA1YmRmZTJl"
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
            Producción que destaca varios puntos de Guanacaste,
            desde sus playas, cultura y paisajes. Con la narración del retahilero Carlos Leiton, 
            este trabajo fue emotivo ya que se realizó en fechas donde la provincia se vio afectada por inundaciones.
          </p>
        </div>

        {/* Card 3 - Avistamiento de delfines con Samara Adventure */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Avistamiento de delfines con Samara Adventure
          </h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/SAMARA.jpg"
              alt="Avistamiento de delfines con Samara Adventure"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/DFOuqoqstdI/?igsh=eGFuaHBnOTl1dXli"
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
            En el 2024 ganamos un premio fotográfico el cual consistió en un tour de avistamiento de delfines
            con Samara Adventure. Acá les compartimos un corto vídeo de lo que fue esta experiencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Turistico;
