import { useNavigate } from "react-router-dom";

const ServiceSelection = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Boda", path: "/services/boda" },
    { name: "15 años", path: "/services/quince-años" },
    { name: "Graduaciones", path: "/services/graduaciones" },
    { name: "Baby Shower", path: "/services/baby-shower" },
    { name: "Fotos al aire libre", path: "/services/fotos-aire-libre" },
    { name: "Fotos tipo estudio", path: "/services/fotos-estudio" },
    { name: "Deportivas", path: "/services/deportivas" },
    { name: "Certámenes de belleza", path: "/services/certamenes-belleza" },
    { name: "Tomas a propiedades", path: "/services/tomas-propiedades" },
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
          Seleccione su servicio de interés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              className={`bg-yellow-600 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-black hover:border-2 hover:border-yellow-400
                ${index === services.length - 1 ? "sm:col-span-2 md:col-span-1 mx-auto md:mx-0" : ""}`}
              onClick={() => navigate(service.path)}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ServiceSelection;
