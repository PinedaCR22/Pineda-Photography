// src/components/Cenas.tsx
import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const Cenas = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-24" />

      {/* Contenedor con animación de aparición */}
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
              src="/images/servicios/ce1.jpg"
              alt="Capturamos tu Cena de Graduación con Estilo"
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
              Capturamos tu Cena de Graduación con Estilo
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              En Pineda Photography sabemos que la cena de graduación es un momento de celebración y logro. Nos especializamos en registrar la elegancia y los detalles de esta ocasión tan especial.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Desde los brindis hasta las conversaciones entre amigos, nos enfocamos en documentar esos instantes auténticos para que perduren en tu memoria.
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
              src="/images/servicios/ce2.jpg"
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
              Cobertura completa de la cena, desde la llegada de los invitados hasta los brindis.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Sesiones previas de retrato en el lugar de celebración y opciones de fotografías grupales y detalles decorativos.
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
              src="/images/servicios/ce3.jpg"
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
              Precios y paquetes
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <strong>Paquete 1 (100,000₡):</strong> Incluye la cobertura total del evento de graduación, entregando la totalidad de fotografías realizadas en alta resolución.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <strong>Paquete 2 (180,000₡):</strong> Incluye la cobertura total del evento de graduación, entregando la totalidad de fotografías realizadas en alta resolución. Además de 1 hora previa al evento para fotografías individuales y familiares en recepción.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
            >
              <strong>Paquete 3 (250,000₡):</strong> Incluye la cobertura total del evento de graduación, entregando la totalidad de fotografías realizadas en alta resolución. Además de 1 hora previa al evento para fotografías individuales y familiares en recepción. Este paquete también incluye la producción de un vídeo que recopila los mejores momentos a lo largo del evento (40 segundos a 1 minuto).
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

export default Cenas;
