import Navbar from "../../layout/Navbar";

const QuinceAnios = () => {
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
              src="/images/quince-intro.jpg" 
              alt="Celebra tus Quince Años con Magia" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Celebra tus Quince Años con Magia
            </h2>
            <p className="text-lg text-gray-700">
              En Pineda Photography capturamos la esencia de este día tan especial. 
              Cada sonrisa, cada emoción y cada momento inolvidable quedará inmortalizado en fotografías llenas de vida.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Nuestra experiencia nos permite destacar los detalles más hermosos de tu celebración, 
              creando recuerdos únicos que te acompañarán para siempre.
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
              src="/images/quince-incluye.jpg" 
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
              Nuestro paquete de fotografía para quince años incluye sesiones previas, 
              cobertura del evento, álbum digital y edición profesional de imágenes.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              También ofrecemos asesoramiento en poses y locaciones, asegurando que cada 
              toma refleje tu personalidad y el estilo que deseas para tu sesión.
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
              src="/images/quince-precios.jpg" 
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
              Contamos con paquetes adaptados a cada necesidad. Desde **₡150,000** hasta opciones premium que incluyen 
              sesiones en exteriores, videos y álbumes personalizados.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Para conocer más sobre nuestros paquetes y opciones adicionales, 
              contáctanos y diseñaremos el plan perfecto para ti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuinceAnios;
