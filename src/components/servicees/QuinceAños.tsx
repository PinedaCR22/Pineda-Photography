// src/components/QuinceAnios.tsx
import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const QuinceAnios = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-24" />

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
              src="/images/servicios/151.jpg"
              alt="Celebra tus Quince Años con Magia"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
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
              Celebra tus 15 años con magia
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              En Pineda Photography capturamos la esencia de este día tan especial.
              Cada sonrisa, cada emoción y cada momento inolvidable quedará inmortalizado en fotografías llenas de vida.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Nuestra experiencia nos permite destacar los detalles más hermosos de tu celebración,
              creando recuerdos únicos que te acompañarán para siempre.
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
              src="/images/servicios/152.jpg"
              alt="¿Qué incluye nuestro servicio?"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
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
              Nuestro paquete de fotografía para quince años incluye sesiones previas,
              cobertura total del evento y edición profesional de imágenes.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              También ofrecemos asesoramiento en poses y locaciones, asegurando que cada
              toma refleje tu personalidad y el estilo que deseas para tu sesión.
            </motion.p>
          </div>
        </motion.div>

        {/* Espaciado entre cards */}
        <div className="h-10" />

        {/* Card 3 - Precios y Paquetes */}
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
              src="/images/servicios/153.jpg"
              alt="Precios y Paquetes"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
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
              Precios y Paquetes
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <strong>Paquete 1 (80,000₡):</strong> Incluye la cobertura total del evento, entregando la totalidad de fotografías realizadas en alta resolución.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <strong>Paquete 2 (100,000₡):</strong> Incluye la cobertura total del evento, entregando la totalidad de fotografías realizadas en alta resolución. Además de una sesión previa de 15 fotografías a la quinceañera.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
            >
              <strong>Paquete 3 (180,000₡):</strong> Incluye la cobertura total del evento, entregando la totalidad de fotografías realizadas en alta resolución. Además de una sesión previa de 15 fotografías con pareja. Este paquete también incluye un video editado recopilando los mejores momentos del 15 años (40 segundos a 1 minuto).
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              <strong>Nota:</strong> Desplazamiento incluido en Nicoya y Santa Cruz. Otras ubicaciones con costo adicional.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuinceAnios;
