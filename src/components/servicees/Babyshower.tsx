// src/components/BabyShower.tsx
import { motion } from "framer-motion";
import Navbar from "../../layout/Navbar";

const BabyShower = () => {
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
              src="/images/servicios/bs1.jpg"
              alt="Capturamos la Dulzura de tu Baby Shower"
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
              Capturamos la Dulzura de tu Baby Shower
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Un baby shower es un momento especial para celebrar la llegada de un nuevo miembro a la familia.
              En Pineda Photography nos encargamos de capturar cada sonrisa, emoción y detalle de este día tan especial.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Desde las decoraciones, los juegos y las interacciones con familiares y amigos,
              buscamos que cada fotografía refleje el amor y la felicidad del evento.
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
              src="/images/servicios/bs2.jpg"
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
              Nuestro servicio de fotografía para baby shower incluye cobertura completa del evento,
              sesiones con los futuros padres, familiares e invitados, así como capturas de la decoración y regalos.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Además, ofrecemos sesiones previas con los padres, tomas espontáneas durante los juegos y
              detalles en alta calidad que harán de este evento un recuerdo inolvidable.
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
              src="/images/servicios/bs3.jpg"
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
              <strong>Paquete 1 (70,000₡):</strong> Incluye la cobertura total del evento,
              entregando la totalidad de fotografías realizadas en alta resolución.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <strong>Paquete 2 (90,000₡):</strong> Incluye la cobertura total del evento,
              entregando la totalidad de fotografías realizadas en alta resolución.
              Además de una sesión previa de 15 fotografías a la pareja.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
            >
              <strong>Paquete 3 (170,000₡):</strong> Incluye la cobertura total del evento,
              entregando la totalidad de fotografías realizadas en alta resolución.
              Además de una sesión previa de 15 fotografías con pareja.
              Este paquete también incluye un video editado recopilando los mejores momentos del baby shower (40 segundos a 1 minuto).
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

export default BabyShower;
