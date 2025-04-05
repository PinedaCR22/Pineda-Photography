import Navbar from "../../layout/Navbar";

const CertamenesBelleza = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Espacio entre el navbar y el contenido */}
      <div className="h-20"></div>

      {/* Contenido de la página */}
      <div className="w-full flex flex-col items-center py-16 px-8">
        
        {/* Card 1 - Introducción */}
        <div className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/certamen-intro.jpg" 
              alt="Fotografía para Certámenes de Belleza" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fotografía para Certámenes de Belleza
            </h2>
            <p className="text-lg text-gray-700">
              Los certámenes de belleza requieren un enfoque profesional para capturar la elegancia, 
              la confianza y la personalidad de cada participante. 
              En Pineda Photography nos especializamos en destacar lo mejor de cada concursante.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Contamos con experiencia en la cobertura de desfiles, sesiones previas y fotografía de gala, 
              asegurando imágenes que reflejen profesionalismo y distinción.
            </p>
          </div>
        </div>

        {/* Espaciado entre cards */}
        <div className="h-10"></div>

        {/* Card 2 - ¿Qué incluye nuestro servicio? */}
        <div className="w-full flex flex-col md:flex-row-reverse items-center bg-white shadow-lg rounded-lg p-6">
          {/* Imagen a la derecha */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/certamen-incluye.jpg" 
              alt="¿Qué incluye nuestro servicio?" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la izquierda */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Qué incluye nuestro servicio?
            </h2>
            <p className="text-lg text-gray-700">
              Nuestro servicio incluye fotografía de pasarela, retratos individuales, 
              sesiones en estudio o exteriores y cobertura completa del certamen.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Ofrecemos edición profesional para garantizar imágenes impactantes, listas para redes sociales, 
              portafolios o material publicitario.
            </p>
          </div>
        </div>

        {/* Espaciado entre cards */}
        <div className="h-10"></div>

        {/* Card 3 - Precios */}
        <div className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/certamen-precios.jpg" 
              alt="Precios y Paquetes" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precios y Paquetes
            </h2>
            <p className="text-lg text-gray-700">
              Ofrecemos paquetes personalizados a partir de **₡120,000**, 
              con opciones para cobertura completa, sesiones individuales o fotografía editorial de los concursantes.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Además, brindamos paquetes de retratos exclusivos para concursantes 
              que desean imágenes impactantes antes del evento.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Consulta nuestras opciones y agenda tu sesión para destacar en el certamen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertamenesBelleza;
