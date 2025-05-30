import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const Turistico = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-24" />

      {/* Título y descripción animados */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Turísticos
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          En Pineda Photography capturamos la esencia de cada destino con videos turísticos.
          Desde paisajes exóticos hasta experiencias culturales, convertimos cada viaje en una producción visual inolvidable.
        </motion.p>
      </motion.div>

      {/* Cards animadas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        {[
          {
            title: "Sobrevolando el Lago Atitlan, Guatemala",
            img: "/images/producciones/ATITLAN.jpg",
            url: "https://www.instagram.com/reel/C9ijXhlv4ah/?igsh=bWd6MXN3cnNuYTFh",
            description:
              "En el verano de 2024 estuvimos de viaje por Guatemala, en este viaje realizamos varias tomas con drone desde los diferentes pueblos como Panajachel, San Pedro, San Juan y San Marcos.",
          },
          {
            title: "Guanacaste, la tierra prometida",
            img: "/images/producciones/GUANACASTE.jpg",
            url: "https://www.instagram.com/reel/DCiFHKKpaCc/?igsh=bWFkcTA1YmRmZTJl",
            description:
              "Producción que destaca varios puntos de Guanacaste, desde sus playas, cultura y paisajes. Con la narración del retahilero Carlos Leiton, este trabajo fue emotivo ya que se realizó en fechas donde la provincia se vio afectada por inundaciones.",
          },
          {
            title: "Avistamiento de delfines con Samara Adventure",
            img: "/images/producciones/SAMARA.jpg",
            url: "https://www.instagram.com/reel/DFOuqoqstdI/?igsh=eGFuaHBnOTl1dXli",
            description:
              "En el 2024 ganamos un premio fotográfico el cual consistió en un tour de avistamiento de delfines con Samara Adventure. Acá les compartimos un corto vídeo de lo que fue esta experiencia.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h2>
            <div className="relative w-full h-64 bg-black flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute">
                <a href={card.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:border-2 hover:border-yellow-300 transition duration-300">
                    Ver video
                  </button>
                </a>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-4">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Turistico;
