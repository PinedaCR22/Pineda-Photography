import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductionSelection = () => {
  const navigate = useNavigate();

  const productions = [
    { name: "Publicidad", path: "/productions/publicidad" },
    { name: "Reels", path: "/productions/reels" },
    { name: "Producción Audiovisual", path: "/productions/produccion-audiovisual" },
    { name: "Turísticos", path: "/productions/turisticos" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center pt-16">
      {/* Imagen de fondo desenfocada */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/PORTADA.jpg')",
          filter: "blur(6px)",
          zIndex: 0,
        }}
      ></div>

      {/* Contenedor animado */}
      <motion.div
        className="relative z-10 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg w-11/12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Seleccione el tipo de producción de interés
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {productions.map((production, index) => (
            <motion.button
              key={index}
              className="bg-yellow-600 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300"
              onClick={() => navigate(production.path)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {production.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductionSelection;
