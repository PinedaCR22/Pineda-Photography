
const VideoSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black overflow-hidden mt-16">
      {/* Capa de fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/images/PORTADA.jpg')`,
        }}
      ></div>

      {/* Contenedor del texto con fondo semitransparente */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <div className="bg-black bg-opacity-50 p-6 rounded-md max-w-2xl mx-auto">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Bienvenidos al sitio web oficial de Pineda Photography
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            Capturamos los momentos más inolvidables con pasión y creatividad, convirtiéndolos en recuerdos eternos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
