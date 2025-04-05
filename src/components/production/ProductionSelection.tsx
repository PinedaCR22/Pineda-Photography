import { useNavigate } from "react-router-dom";

const ProductionSelection = () => {
  const navigate = useNavigate();

  const productions = [
    { name: "Publicidad", path: "/productions/publicidad" },
    { name: "Reels", path: "/productions/reels" },
    { name: "Producción Audiovisual", path: "/productions/produccion-audiovisual" },
    { name: "Turísticos", path: "/productions/turisticos" },
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

      {/* Contenedor de selección */}
      <div className="relative z-10 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg w-11/12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Seleccione el tipo de producción de interés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {productions.map((production, index) => (
            <button
              key={index}
              className="bg-yellow-600 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-black hover:border-2 hover:border-yellow-400"
              onClick={() => navigate(production.path)}
            >
              {production.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionSelection;
