import Navbar from "../../layout/Navbar";

const TomasPropiedades = () => {
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
              src="/images/propiedades-intro.jpg" 
              alt="Fotografía para Tomas a Propiedades" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fotografía Profesional para Propiedades
            </h2>
            <p className="text-lg text-gray-700">
              La presentación visual de una propiedad es clave para atraer compradores o inquilinos. 
              En Pineda Photography nos especializamos en capturar espacios con una iluminación óptima, 
              resaltando los mejores ángulos y características de cada propiedad.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Ya sea para venta, alquiler o promoción turística, 
              ofrecemos tomas de alta calidad que aumentan el valor y atractivo de tu propiedad.
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
              src="/images/propiedades-incluye.jpg" 
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
              Nuestro servicio de fotografía inmobiliaria incluye imágenes de alta calidad para interiores y exteriores, 
              fotografía aérea con drones y edición profesional para realzar los detalles clave de la propiedad.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              También brindamos asesoría en la preparación del espacio para garantizar resultados óptimos, 
              asegurando una presentación visual atractiva para los clientes potenciales.
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
              src="/images/propiedades-precios.jpg" 
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
              Los paquetes de fotografía inmobiliaria comienzan en **₡80,000**, 
              con opciones de tomas detalladas de cada área de la propiedad y vistas aéreas opcionales.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Para inmobiliarias y proyectos de gran escala, ofrecemos paquetes de cobertura completa 
              con material digital optimizado para redes sociales y plataformas de venta de propiedades.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Contáctanos para personalizar un servicio a la medida de tu propiedad y atraer más clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomasPropiedades;
