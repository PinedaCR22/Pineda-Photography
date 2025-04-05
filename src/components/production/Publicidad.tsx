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

      {/* Sección de videos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Spot Comercial</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/publicidad1.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Spots publicitarios diseñados para cautivar audiencias y fortalecer la presencia de marca en el mercado.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anuncios para Redes</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/publicidad2.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Producciones optimizadas para redes sociales con alto impacto visual y mensajes efectivos.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Videos Corporativos</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/publicidad3.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Presentamos la esencia y valores de tu empresa a través de producciones audiovisuales profesionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publicidad;
