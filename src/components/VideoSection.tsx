import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa"; // Flecha completa hacia abajo

const VideoSection = () => {
  const handleScroll = () => {
    const target = document.getElementById("seccion-siguiente");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      {/* Texto animado */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-black/30 p-6 rounded-md max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Bienvenidos al sitio web oficial de Pineda Photography
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            Capturamos los momentos más inolvidables con pasión y creatividad, convirtiéndolos en recuerdos eternos.
          </p>
        </motion.div>

        {/* Flecha hacia abajo animada y funcional */}
        <motion.div
          className="mt-10 text-white text-3xl cursor-pointer"
          onClick={handleScroll}
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoSection;
