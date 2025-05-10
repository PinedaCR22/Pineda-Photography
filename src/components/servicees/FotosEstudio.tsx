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
              src="/images/servicios/EST3.jpg" 
              alt="Fotografía de Estudio: Captura Profesional y Elegante" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fotografía de Estudio: Captura profesional y elegante
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
              src="/images/servicios/EST2.jpg" 
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
              fondos personalizados color negro, blanco y rojo vino, el estudio se encuentra ubicado en Santa Cruz pero podemos movilizar el estudio si así el cliente lo desea. 
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
              src="/images/servicios/EST1.jpg" 
              alt="Precios y Paquetes" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precios y paquetes
            </h2>
            <p className="text-lg text-gray-700">
              <strong>Paquete 1 (20,000₡):</strong> Incluye 1 hora de sesión fotográfica y 10 fotografías editadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 2 (25,000₡):</strong> Incluye 2 horas de sesión fotográfica y 15 fotografías editadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 3 (35,000₡):</strong> Incluye 2 hora de sesión fotográfica y 30 fotografías editadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Nota:</strong> Estos precios aplican en nuestro estudio ubicado en Santa Cruz Guanacaste, sin embargo como hemos mencionado por un precio adicional podemos llevar el estudio al lugar de interés del cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosEstudio;
