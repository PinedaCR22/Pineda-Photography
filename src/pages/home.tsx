import VideoSection from "../components/VideoSection";
import AboutUs from "../components/AboutUs";
import PhotoCarousel from "../components/PhotoCarousel";
import ClientSection from "../components/ClientSection"; // Importa la nueva sección

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Sección de Video */}
      <VideoSection />

      {/* Espacio entre secciones */}
      <div className="h-12"></div>

      {/* Sección "Quiénes Somos" */}
      <AboutUs />

      {/* Espacio entre secciones */}
      <div className="h-12"></div>

      {/* Carrusel de Fotografías */}
      <PhotoCarousel />

      {/* Espacio entre secciones */}
      <div className="h-12"></div>

      {/* Nueva Sección "Clientes con los que hemos trabajado" */}
      <ClientSection />
    </div>
  );
};

export default Home;
