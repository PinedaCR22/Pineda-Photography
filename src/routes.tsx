import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Productions from "./pages/productions";
import Contact from "./pages/contact";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Boda from "./components/servicees/Boda";
import QuinceAños from "./components/servicees/QuinceAños";
import Graduaciones from "./components/servicees/Graduaciones";
import Babyshower from "./components/servicees/Babyshower";
import FotosAireLibre from "./components/servicees/FotosAireLibre";
import FotosEstudio from "./components/servicees/FotosEstudio";
import CertamenesBelleza from "./components/servicees/CertamenesBelleza";
import TomasPropiedades from "./components/servicees/TomasPropiedades";
import Deportivas from "./components/servicees/Deportivas";
import Publicidad from "./components/production/Publicidad";
import Audiovisual from "./components/production/Audiovisual";
import Turistico from "./components/production/Turístico";
import Reels from "./components/production/Reels";


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas Principales */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/productions" element={<Productions />} />
        <Route path="/contact" element={<Contact />} />

        {/* Rutas de Servicios Específicos */}
        <Route path="/services/boda" element={<Boda />} />
        <Route path="/services/quince-años" element={<QuinceAños />} />
        <Route path="/services/graduaciones" element={<Graduaciones />} />
        <Route path="/services/baby-shower" element={<Babyshower />} />
        <Route path="/services/fotos-aire-libre" element={<FotosAireLibre />} />
        <Route path="/services/fotos-estudio" element={<FotosEstudio />} />
        <Route path="/services/deportivas" element={<Deportivas />} />
        <Route path="/services/certamenes-belleza" element={<CertamenesBelleza />} />
        <Route path="/services/tomas-propiedades" element={<TomasPropiedades />} />

        {/* Rutas de Producciones */}
        <Route path="/productions/publicidad" element={<Publicidad />} />
        <Route path="/productions/produccion-audiovisual" element={<Audiovisual />} />
        <Route path="/productions/turisticos" element={<Turistico />} />
        <Route path="/productions/reels" element={<Reels />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
