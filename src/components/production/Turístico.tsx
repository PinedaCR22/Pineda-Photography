import Navbar from "../../layout/Navbar"; 

const Turistico = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de título y descripción */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">Turísticos</h1>
        <p className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto">
          En Pineda Photography capturamos la esencia de cada destino con videos turísticos **inmersivos**. 
          Desde paisajes exóticos hasta experiencias culturales, convertimos cada viaje en una producción visual inolvidable.  
        </p>
      </div>

      {/* Sección de videos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8">
        {/* Card 1 - Documentales de Viajes */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentales de Viajes</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/turismo1.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Producción de **documentales turísticos** que destacan la belleza y cultura de diferentes destinos.
          </p>
        </div>

        {/* Card 2 - Aventuras Extremos */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aventuras Extremos</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/turismo2.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Capturamos la emoción de los deportes extremos y experiencias turísticas **inolvidables**.
          </p>
        </div>

        {/* Card 3 - Videos Promocionales */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Videos Promocionales</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/turismo3.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Producción de **videos promocionales** para hoteles, agencias de viajes y destinos turísticos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Turistico;
