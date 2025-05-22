import Navbar from "../../layout/Navbar";

const FotosAireLibre = () => {
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
              src="/images/servicios/SERVICE1.jpg" 
              alt="Fotografía al Aire Libre: Captura la Belleza Natural" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fotografía al aire libre: Captura la belleza natural
            </h2>
            <p className="text-lg text-gray-700">
              Las sesiones de fotos al aire libre son perfectas para capturar la esencia de la naturaleza 
              y la espontaneidad de cada persona. En Pineda Photography nos especializamos en aprovechar 
              la luz natural y los paisajes más impresionantes para crear imágenes vibrantes y memorables.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Ofrecemos sesiones en bosques, playas, montañas, parques y cualquier entorno natural 
              que resalte la personalidad y el estilo de nuestros clientes.
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
              src="/images/servicios/SERVICE2.jpg" 
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
              Nuestras sesiones de fotos al aire libre incluyen asesoramiento en locaciones, 
              dirección de poses y edición profesional de imágenes. Nos aseguramos de que cada 
              fotografía capture la magia del entorno y la esencia de nuestros clientes.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Además, ofrecemos sugerencias de horario para obtener la mejor iluminación ya sea natural
              o artificial mediante equipo profesional.
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
              src="/images/servicios/SERVICE3.jpg" 
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
              <strong>Paquete 1 (15,000₡):</strong> Incluye 1 hora de sesión fotográfica y 15 fotografías editadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 2 (25,000₡):</strong> Incluye 2 horas de sesión fotográfica y 25 fotografías editadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 3 (30,000₡):</strong> Incluye 1 hora de sesión fotográfica y 40 fotografías editadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Nota:</strong> Estos precios aplican para las ciudades de Santa Cruz o Nicoya, sin embargo por un precio adicional podemos coordinar la ubicación de interés del cliente para las fotografías.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotosAireLibre;
