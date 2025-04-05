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
          En Pineda Photography creamos **Reels publicitarios** con impacto visual para redes sociales. 
          Perfectos para **emprendedores**, marcas y negocios que buscan conectar con su audiencia de 
          manera creativa y rápida.  
        </p>
      </div>

      {/* Sección de videos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8">
        {/* Card 1 - Reels para Emprendedores */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reels para Emprendedores</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/reels1.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Creación de **Reels dinámicos** para potenciar el crecimiento de pequeños negocios, mostrando 
            productos y servicios de forma atractiva.
          </p>
        </div>

        {/* Card 2 - Reels Cinematográficos */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reels Cinematográficos</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/reels2.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Producción de **Reels con estilo cinematográfico**, utilizando tomas profesionales y 
            edición de alto nivel para transmitir emociones en pocos segundos.
          </p>
        </div>

        {/* Card 3 - Reels para Redes Sociales */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reels para Redes Sociales</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/reels3.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Videos cortos optimizados para **Instagram, Facebook y TikTok**, 
            diseñados para captar la atención y aumentar el engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reels;
