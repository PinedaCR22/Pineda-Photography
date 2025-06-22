import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";

const Reels = () => {
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
          Reels
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          En Pineda Photography creamos Reels publicitarios con impacto visual para redes sociales. Perfectos para emprendedores, marcas y negocios que buscan conectar con su audiencia de manera creativa y rápida. Para ofrecerte una cotización más exacta ponte en <Link to="/contact" className="font-bold underline">contacto</Link> conmigo.
        </motion.p>
      </motion.div>

      {/* Cards animadas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        {[
          {
            title: "Detrás de cámara de una propuesta de matrimonio",
            img: "/images/producciones/PROPUESTA.jpg",
            url: "https://www.instagram.com/reel/DIIKSX_sY7N/?igsh=ZDNnNnU0cDNzc213",
            description:
              "Las fotos más especiales son aquellas que capturan emociones reales; en esta propuesta de matrimonio, nos escondimos sin que la novia lo supiera, obteniendo momentos llenos de emoción y una reacción inolvidable.",
          },
          {
            title: "Un día de trabajo en la isla más poblada de Costa Rica",
            img: "/images/producciones/CHIRA.jpg",
            url: "#",
            description:
              "Acá les compartimos un pequeño vlog de lo que es trabajar en la isla Chira, dentro del corto veremos cómo es el viaje y diversos pueblos que tiene la isla Chira, muy pocos conocen este destino.",
          },
          {
            title: "Detrás de cámara a una grabación de Miss Costa Rica",
            img: "/images/producciones/GALAFINAL.jpg",
            url: "#",
            description:
              "Conozca un poco sobre el detrás de cámara que realizamos a Daniela Pérez, candidata a Miss Costa Rica 2025. Este reel muestra la riqueza cultural de Guanacaste, donde recorremos los 11 cantones de la provincia.",
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

export default Reels;
