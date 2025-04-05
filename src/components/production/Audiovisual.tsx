import Navbar from "../../layout/Navbar";

const Audiovisual = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de título y descripción */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">Producción Audiovisual</h1>
        <p className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto">
          En Pineda Photography llevamos la producción audiovisual al siguiente nivel, 
          creando videos con calidad cinematográfica para empresas, artistas y proyectos 
          creativos. Nos especializamos en la dirección, grabación y edición de contenido 
          profesional que cautiva y transmite mensajes poderosos.
        </p>
      </div>

      {/* Sección de videos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8">
        {/* Card 1 - Videos Institucionales */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Videos Institucionales</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/audiovisual1.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Creamos videos institucionales que reflejan la identidad, valores y misión de 
            las empresas, ideal para fortalecer su imagen de marca.
          </p>
        </div>

        {/* Card 2 - Producción de Cortometrajes */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cortometrajes y Narrativa</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/audiovisual2.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Desarrollamos historias visuales impactantes con una estética cinematográfica, 
            cuidando cada detalle en dirección de arte, guion y postproducción.
          </p>
        </div>

        {/* Card 3 - Producción de Eventos */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cobertura de Eventos</h2>
          <div className="w-full h-64 bg-black flex items-center justify-center">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/audiovisual3.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            Ofrecemos cobertura audiovisual profesional para conferencias, conciertos, 
            lanzamientos de productos y todo tipo de eventos importantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Audiovisual;
