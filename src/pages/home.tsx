import VideoSection from "../components/VideoSection";
import AboutUs from "../components/AboutUs";
import PhotoCarousel from "../components/PhotoCarousel";
import ClientSection from "../components/ClientSection";
import LogrosSection from "../components/LogrosSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Sección de Video */}
      <VideoSection />

      {/* Espacio entre secciones */}
      <div className="h-12"></div>

      {/* Sección "Quiénes Somos" con ID para el scroll */}
      <div id="seccion-siguiente">
        <AboutUs />
      </div>

      {/* Espacio entre secciones */}
      <div className="h-12"></div>

      {/* Carrusel de Fotografías */}
      <PhotoCarousel />

      <div className="h-12"></div>

      {/* Sección "Clientes con los que hemos trabajado" */}
      <ClientSection />

      <div className="h-12"></div>

      {/* Sección "Logros Audiovisuales" */}
      <LogrosSection />
    </div>
  );
};

export default Home;
