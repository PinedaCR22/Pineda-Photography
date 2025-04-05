import ProductionSelection from "../components/production/ProductionSelection";
import Navbar from "../layout/Navbar";


const Productions = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de selección de servicios */}
      <ProductionSelection />
    </div>
  );
};

export default Productions;
