import Navbar from "../../layout/Navbar";

const FotosDeportivas = () => {
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
              src="/images/deportivas-intro.jpg" 
              alt="Fotografía Deportiva: Captura la Intensidad del Momento" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fotografía Deportiva: Captura la intensidad del momento
            </h2>
            <p className="text-lg text-gray-700">
              En la fotografía deportiva, cada fracción de segundo cuenta. 
              Nos especializamos en capturar la acción en su máximo esplendor, 
              inmortalizando la velocidad, la emoción y la determinación de cada deportista.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Ya sea en un partido, una competencia o un entrenamiento, 
              nuestro equipo está preparado para ofrecer imágenes impactantes 
              con la mejor calidad y definición.
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
              src="/images/deportivas-incluye.jpg" 
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
              Nuestro servicio de fotografía deportiva incluye cobertura de eventos completos, 
              capturas en alta velocidad, edición profesional y entrega digital de las imágenes 
              más impactantes de la jornada.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Además, contamos con opciones de seguimiento personalizado para equipos, 
              atletas individuales o torneos completos.
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
              src="/images/deportivas-precios.jpg" 
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

export default FotosDeportivas;
