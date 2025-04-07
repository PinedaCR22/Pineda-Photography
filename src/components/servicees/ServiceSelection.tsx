import { useNavigate } from "react-router-dom";

const ServiceSelection = () => {
  const navigate = useNavigate();

  // Servicios organizados por categorías
  const serviceCategories = [
    {
      title: "Eventos",
      services: [
        { name: "Boda", path: "/services/boda" },
        { name: "15 años", path: "/services/quince-años" },
        { name: "Cenas", path: "/services/cenas" },
        { name: "Baby Shower", path: "/services/baby-shower" }
      ]
    },
    {
      title: "Sesiones",
      services: [
        { name: "Fotos al aire libre", path: "/services/fotos-aire-libre" },
        { name: "Fotos tipo estudio", path: "/services/fotos-estudio" }
      ]
    },
    {
      title: "Otros",
      services: [
        { name: "Graduaciones", path: "/services/graduaciones" },
        { name: "Deportivas", path: "/services/deportivas" },
        { name: "Certámenes de belleza", path: "/services/certamenes-belleza" },
        { name: "Tomas a propiedades", path: "/services/tomas-propiedades" }
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/collage-con-5-fotos-top.png')",
          filter: "blur(6px)",
          zIndex: 0,
        }}
      ></div>

      {/* Contenedor de servicios con fondo opaco */}
      <div className="relative z-10 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg w-11/12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Seleccione su servicio de interés (INFORMACIÓN GENÉRICA)
        </h2>

        {/* Renderizar cada categoría */}
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            {/* Título de la categoría */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {category.title}
            </h3>
            
            {/* Línea divisoria */}
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-4"></div>
            
            {/* Contenedor de botones con estructura condicional */}
            <div
              className={`${
                category.title === "Sesiones"
                  ? "flex flex-wrap justify-center gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
              } mb-2`}
            >
              {category.services.map((service, serviceIndex) => (
                <button
                  key={serviceIndex}
                  className="bg-yellow-600 text-white text-lg font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-black hover:border-2 hover:border-yellow-400"
                  onClick={() => navigate(service.path)}
                >
                  {service.name}
                </button>
              ))}
            </div>
            
            {/* No mostrar margen después de la última categoría */}
            {categoryIndex < serviceCategories.length - 1 && (
              <div className="mt-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
