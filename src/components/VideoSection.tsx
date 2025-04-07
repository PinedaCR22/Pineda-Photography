const VideoSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black overflow-hidden">
      {/* Capa de fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* YouTube video como imagen de fondo mediante div */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('https://img.youtube.com/vi/w3tvqHmvimg/maxresdefault.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* Enlace al video que se abrirá en una nueva pestaña */}
      <div className="absolute bottom-5 right-5 z-20">
        <a 
          href="https://youtu.be/w3tvqHmvimg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg hover:bg-opacity-90 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          Ver video
        </a>
      </div>
      
      {/* Texto superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-white text-3xl md:text-5xl font-bold px-4">
          Bienvenidos al sitio web oficial de Pineda Photography
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 px-6 max-w-2xl">
          Capturamos los momentos más inolvidables con pasión y creatividad, convirtiéndolos en recuerdos eternos.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;