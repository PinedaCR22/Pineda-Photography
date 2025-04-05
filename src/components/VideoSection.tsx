const VideoSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/video-portada.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Texto superpuesto */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
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