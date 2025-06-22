import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const FotosEstudio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20" />

      {/* Contenedor principal con animación de aparición */}
      <motion.div
        className="w-full flex flex-col items-center py-16 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Card 1 - Introducción */}
        <motion.div
          className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/servicios/EST3.jpg"
              alt="Fotografía de Estudio: Captura Profesional y Elegante"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg object-cover object-top max-h-80 md:max-h-[500px]"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Fotografía de estudio: Captura profesional y elegante
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Las sesiones de fotos en estudio permiten capturar imágenes con una iluminación controlada y fondos personalizados para lograr un estilo profesional y elegante. Son perfectas para retratos, fotografías familiares, sesiones corporativas o artísticas.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              En Pineda Photography contamos con equipos de iluminación de alta calidad, fondos personalizados y una dirección detallada para cada sesión.
            </motion.p>
          </div>
        </motion.div>

        {/* Espaciado entre cards */}
        <div className="h-10" />

        {/* Card 2 - ¿Qué incluye nuestro servicio? */}
        <motion.div
          className="w-full flex flex-col md:flex-row-reverse items-center bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {/* Imagen a la derecha */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/servicios/EST2.jpg"
              alt="¿Qué incluye nuestro servicio?"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg object-cover object-top max-h-80 md:max-h-[500px]"
            />
          </div>
          {/* Texto a la izquierda */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              ¿Qué incluye nuestro servicio?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Nuestro servicio de fotografía en estudio incluye iluminación profesional, fondos personalizados color negro, blanco y vino, el estudio se encuentra en Santa Cruz pero podemos movilizar el equipo si el cliente lo desea.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              También ofrecemos asesoría sobre vestuario y poses, garantizando un resultado natural y estilizado en cada toma.
            </motion.p>
          </div>
        </motion.div>

        {/* Espaciado entre cards */}
        <div className="h-10" />

        {/* Card 3 - Precios */}
        <motion.div
          className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/servicios/EST1.jpg"
              alt="Precios y Paquetes"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg object-cover object-top max-h-80 md:max-h-[500px]"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              Precios y paquetes
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <strong>Paquete 1 (20,000₡):</strong> Incluye 1 hora de sesión fotográfica y 10 fotografías editadas en alta resolución.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <strong>Paquete 2 (25,000₡):</strong> Incluye 2 horas de sesión fotográfica y 15 fotografías editadas en alta resolución.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
            >
              <strong>Paquete 3 (35,000₡):</strong> Incluye 2 horas de sesión fotográfica y 30 fotografías editadas en alta resolución.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              <strong>Nota:</strong> Estos precios aplican en nuestro estudio de Santa Cruz, Guanacaste. Para otras ubicaciones, se aplica un costo adicional.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FotosEstudio;
