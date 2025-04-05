import Navbar from "../../layout/Navbar";

const FotosEstudio = () => {
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
              src="/images/estudio-intro.jpg" 
              alt="Fotografía de Estudio: Captura Profesional y Elegante" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fotografía de Estudio: Captura Profesional y Elegante
            </h2>
            <p className="text-lg text-gray-700">
              Las sesiones de fotos en estudio permiten capturar imágenes con una iluminación controlada y 
              fondos personalizados para lograr un estilo profesional y elegante. 
              Son perfectas para retratos, fotografías familiares, sesiones corporativas o artísticas.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              En Pineda Photography contamos con equipos de iluminación de alta calidad, 
              fondos personalizados y una dirección detallada para cada sesión.
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
              src="/images/estudio-incluye.jpg" 
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
              Nuestro servicio de fotografía en estudio incluye iluminación profesional, 
              fondos personalizados y dirección para cada sesión. 
              Nos aseguramos de que cada imagen refleje la esencia del cliente y se vea impecable.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              También ofrecemos asesoría sobre vestuario y poses, garantizando un resultado 
              natural y estilizado en cada toma.
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
              src="/images/estudio-precios.jpg" 
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
              Nuestros paquetes inician en **₡70,000**, incluyendo una sesión de 45 minutos, 
              edición profesional y un álbum digital con las mejores fotografías seleccionadas.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              También contamos con opciones de sesiones extendidas, 
              cambios de vestuario y álbumes impresos personalizados.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Contáctanos y reserva tu sesión para obtener imágenes de alta calidad en un ambiente profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosEstudio;
