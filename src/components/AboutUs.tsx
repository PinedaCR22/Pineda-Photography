import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs: React.FC = () => {
  const images = [
    "/images/QUIENES SOMOS.jpeg",
    "/images/PORT.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center bg-gray-100 py-16 px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Imagen con fade y ratio fijo 2:1 */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          className="w-full max-w-md md:max-w-full overflow-hidden rounded-lg shadow-lg"
          style={{ aspectRatio: "2 / 1" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={currentIndex === 0 ? "Quiénes Somos" : "Portafolio"}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Texto animado a la derecha */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
        <p className="text-lg text-gray-700">
          Somos una empresa especializada en fotografía y producción audiovisual. 
          Dedicada a capturar y contar historias de manera única y creativa. 
          Nuestro equipo está conformado por profesionales apasionados por el arte visual, 
          nuestro objetivo es ofrecer resultados que no sólo cumplan, 
          sino que superen las expectativas de nuestros clientes, 
          inmortalizando momentos y llevando ideas al siguiente nivel.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
