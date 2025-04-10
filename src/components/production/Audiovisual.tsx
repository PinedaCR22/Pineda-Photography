import Navbar from "../../layout/Navbar";

const Audiovisual = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de título y descripción */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900">Producción Audiovisual</h1>
        <p className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto">
          En Pineda Photography llevamos la producción audiovisual al siguiente nivel, 
          creando videos con calidad cinematográfica para empresas, artistas y proyectos 
          creativos. Nos especializamos en la dirección, grabación y edición de contenido 
          profesional que cautiva y transmite mensajes poderosos.
        </p>
      </div>

      {/* Sección de videos en grilla responsiva */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        
        {/* Card 1 - Producción Legado Guanacasteco */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producción Legado Guanacasteco</h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/LEGADO.jpg"
              alt="Producción Legado Guanacasteco"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/C9xrngEPC_A/?igsh=MzM3ajR6bmxpbDlq"  // Aquí irá la URL definitiva del video
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
            En julio del 2024, Guanacaste celebró su bicentenario de pertenecer a Costa Rica; por ello, realizamos este pequeño documental que destaca las costumbres y tradiciones de cada cantón de la provincia.
          </p>
        </div>
        
        {/* Card 2 - Producción Santa Cruz */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producción Santa Cruz/ Los Chocuacos</h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/SANTA CRUZ.jpg"
              alt="Producción Santa Cruz"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="https://www.instagram.com/reel/C1xKvApOJYO/?igsh=MXJkZmlmeWI0dWV0cw=="  // Aquí irá la URL definitiva del video
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
            Una de las canciones folklóricas más queridas en el cantón de Santa Cruz, con Nano Rosales como cantautor y un variado elenco de artistas locales, hemos realizado el video oficial para esta hermosa canción.
          </p>
        </div>
        
        {/* Card 3 - Producción El secreto del Diriá */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producción El secreto del Diriá</h2>
          <div className="relative w-full h-64 bg-black flex items-center justify-center">
            <img 
              src="/images/producciones/SECRETODIRIA.jpg"
              alt="Producción El secreto del Diriá"
              className="w-full h-full object-cover"
            />
            <div className="absolute">
              <a
                href="#"  // Aquí irá la URL definitiva del video
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
            Enfocada en promover el parque nacional Diriá, esta producción combina la música folklórica y una historia de amor, destacando la emotividad y la belleza de cada rincón de este enigmático lugar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Audiovisual;
