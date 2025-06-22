import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceSelection = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: "Eventos",
      services: [
        { name: "Boda", path: "/services/boda" },
        { name: "15 años", path: "/services/quince-años" },
        { name: "Cenas", path: "/services/cenas" },
        { name: "Baby Shower", path: "/services/baby-shower" },
      ],
    },
    {
      title: "Sesiones",
      services: [
        { name: "Fotos al aire libre", path: "/services/fotos-aire-libre" },
        { name: "Fotos tipo estudio", path: "/services/fotos-estudio" },
      ],
    },
    {
      title: "Otros",
      services: [
        { name: "Graduaciones", path: "/services/graduaciones" },
        { name: "Deportivas", path: "/services/deportivas" },
        { name: "Certámenes de belleza", path: "/services/certamenes-belleza" },
        { name: "Tomas a propiedades", path: "/services/tomas-propiedades" },
      ],
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center pt-16">
      {/* Fondo desenfocado */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/PORTADA.jpg')",
          filter: "blur(6px)",
          zIndex: 0,
        }}
      ></div>

      {/* Contenedor con animación */}
      <motion.div
        className="relative z-10 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg w-11/12 max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Título principal animado */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ¡Seleccione su servicio de interés! 
        </motion.h2>

        {/* Categorías */}
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.3, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {category.title}
            </h3>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>

            <div
              className={`${
                category.title === "Sesiones"
                  ? "flex flex-wrap justify-center gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
              } mb-2`}
            >
              {category.services.map((service, serviceIndex) => (
                <motion.button
                  key={serviceIndex}
                  className="bg-yellow-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-black hover:border-2 hover:border-yellow-400 transition duration-300"
                  onClick={() => navigate(service.path)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + serviceIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceSelection;
