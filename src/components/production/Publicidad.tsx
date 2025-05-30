import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const Publicidad = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-24" />

      {/* Título y descripción con animación */}
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
          Publicidad
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          En Pineda Photography creamos producciones publicitarias impactantes para potenciar 
          la identidad de tu marca y atraer a tu audiencia con contenido audiovisual de alta calidad.
        </motion.p>
      </motion.div>

      {/* Cards con animación */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        {[
          {
            title: "Presentación de candidatas al certamen de Miss Universe Guanacaste",
            img: "/images/producciones/PRESENTACIONMU.jpg",
            url: "https://www.instagram.com/reel/DF-2H3Wuiw1/?igsh=aDFhYW84YzJ4YWtq",
            description:
              "En febrero del 2025 fuimos parte del equipo de prensa para la presentación de candidatas al certamen de Miss Universe Guanacaste en el castillo de Lilo. Este contenido publicitario resume lo que fue esta experiencia.",
          },
          {
            title: "La historia de Rochita, interpretada por Elizabeth Cabalceta",
            img: "/images/producciones/ELIZABETH.jpg",
            url: "https://www.instagram.com/reel/DDxOxp8poq5/?igsh=MTV6MHc4djljcW03dQ==",
            description:
              "Un video promocional para Elizabeth, quien en ese entonces era candidata de las fiestas típicas nacionales 2025. Este trabajo combina la historia de una mujer luchadora con diferentes lugares de interés del cantón de Santa Cruz.",
          },
          {
            title: "Contenido publicitario para Hotel Cañon de la Vieja Lodge",
            img: "/images/producciones/CANON.jpg",
            url: "https://www.instagram.com/reel/DFf3lopp85o/?igsh=OG1wc291ODI5bXJm",
            description:
              "Durante el invierno del año 2024 estuvimos a cargo de la grabación de algunas actividades y habitaciones que ofrece el Hotel Cañon de la Vieja Lodge, ubicado a 15 minutos de la ciudad de Liberia.",
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

export default Publicidad;
