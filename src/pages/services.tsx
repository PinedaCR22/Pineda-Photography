import ServiceSelection from "../components/servicees/ServiceSelection";
import Navbar from "../layout/Navbar";


const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Sección de selección de servicios */}
      <ServiceSelection />
    </div>
  );
};

export default Services;
