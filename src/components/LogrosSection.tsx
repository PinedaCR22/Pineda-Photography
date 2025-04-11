import { useState } from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Ganador del concurso: Las 7 maravillas de Guanacaste.",
    image: "/images/AEROPUERTO.jpg",
    description:
      "Concurso realizado por el Guanacaste Airport en el año 2022, esta fotografía fue seleccionada por un jurado entre las 7 finalistas, por lo que sería una de las publicadas en redes sociales del aeropuerto y tiempo despues ganadora por mayor cantidad de votos.",
  },
  {
    title: "Ganador de los concursos: Festival del oceano 2024 y fotografía ambiental y turística 2024.",
    image: "/images/OCEANO.jpg",
    description:
      "Esta fotografía obtuvo el primer lugar en 2 concursos, en el organizado por el festival del oceano La Cruz 2024 y en el concurso fotografía ambiental y turística 2024 organizado por la carrera de turísmo de la Universidad Nacional Sede Regional Chorotega, ambos premios se dieron mediante la votación de un jurado calificador.",
  },
  {
    title: "Ganador del concurso: Europa por mi lente de la Union Europea.",
    image: "/images/EUROPA.jpg",
    description:
      "Este concurso realizado en el año 2023 consistió en la elaboración de alguna fotografía que relacione la cultura europea con la costarricense, la fotografía realizada en ese entonces llamada Amor de Antaño sería una de las ganadoras del concurso y fue mediante la votación de un jurado calificador.",
  },
];

const FlipCard = ({ title, image, description }: any) => {
  const [flipped, setFlipped] = useState(false);

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div className="w-full h-96 perspective">
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={flipped ? "back" : "front"}
        variants={flipVariants}
        transition={{ duration: 0.6 }}
      >
        {/* Frente */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-between p-4 backface-hidden">
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain rounded"
          />
          <button
            onClick={() => setFlipped(true)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:border-2 hover:border-yellow-300 transition"
          >
            Ver más
          </button>
        </div>

        {/* Reverso */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center transform rotateY-180 backface-hidden">
          <p className="text-gray-700 mb-6">{description}</p>
          <button
            onClick={() => setFlipped(false)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:border-2 hover:border-yellow-300 transition"
          >
            Volver
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const LogrosSection = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-16 lg:py-10 xl:py-6 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">
      ¡Nuestros Logros!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {achievements.map((item, index) => (
          <FlipCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LogrosSection;
