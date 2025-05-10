import Navbar from "../../layout/Navbar";

const Boda = () => {
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
              src="/images/boda-intro.jpg" 
              alt="Capturamos tu Gran Día con Elegancia" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Capturamos tu gran día con elegancia
            </h2>
            <p className="text-lg text-gray-700">
              En Pineda Photography entendemos que tu boda es un evento único e irrepetible. 
              Nos especializamos en capturar la emoción, la alegría y los detalles más significativos de este día especial.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Desde los preparativos, la ceremonia y la celebración, estamos atentos a cada instante para crear recuerdos inolvidables. 
              Nuestro enfoque es contar la historia de tu boda con imágenes que reflejen el amor, la emoción y la autenticidad del momento.
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
              src="/images/boda-incluye.jpg" 
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
              Nuestro servicio de fotografía de bodas incluye sesiones previas, cobertura completa del evento y 
              sesiones post-boda. Nos aseguramos de capturar cada momento clave 
              con una calidad excepcional.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Además, ofrecemos asesoría previa para planificar cada detalle de la cobertura fotográfica, asegurando que 
              no falte ninguna toma importante. Puedes optar por fotografías en exteriores, interiores o sesiones creativas 
              según tu estilo y preferencia.
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
              src="/images/boda-precios.jpg" 
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

export default Boda;
