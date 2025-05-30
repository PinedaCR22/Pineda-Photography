import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const Audiovisual = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-24" /> {/* Aumentado de h-20 a h-24 */}

      {/* Sección de título y descripción con animación */}
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
          Producción Audiovisual
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          En Pineda Photography llevamos la producción audiovisual al siguiente nivel, 
          creando videos con calidad cinematográfica para empresas, artistas y proyectos 
          creativos. Nos especializamos en la dirección, grabación y edición de contenido 
          profesional que cautiva y transmite mensajes poderosos.
        </motion.p>
      </motion.div>

      {/* Cards animadas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        {[
          {
            title: "Producción Legado Guanacasteco",
            img: "/images/producciones/LEGADO.jpg",
            url: "https://www.instagram.com/reel/C9xrngEPC_A/?igsh=MzM3ajR6bmxpbDlq",
            description:
              "En julio del 2024, Guanacaste celebró su bicentenario de pertenecer a Costa Rica; por ello, realizamos este pequeño documental que destaca las costumbres y tradiciones de cada cantón de la provincia.",
          },
          {
            title: "Producción Santa Cruz/ Los Chocuacos",
            img: "/images/producciones/SANTA CRUZ.jpg",
            url: "https://www.instagram.com/reel/C1xKvApOJYO/?igsh=MXJkZmlmeWI0dWV0cw==",
            description:
              "Una de las canciones folklóricas más queridas en el cantón de Santa Cruz, con Nano Rosales como cantautor y un variado elenco de artistas locales, hemos realizado el video oficial para esta hermosa canción.",
          },
          {
            title: "Producción El secreto del Diriá",
            img: "/images/producciones/SECRETODIRIA.jpg",
            url: "#",
            description:
              "Enfocada en promover el parque nacional Diriá, esta producción combina la música folklórica y una historia de amor, destacando la emotividad y la belleza de cada rincón de este enigmático lugar.",
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

export default Audiovisual;
