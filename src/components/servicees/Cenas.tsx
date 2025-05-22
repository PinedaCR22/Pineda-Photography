import Navbar from "../../layout/Navbar";

const Cenas = () => {
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
              src="/images/cena-graduacion-intro.jpg"
              alt="Capturamos tu Cena de Graduación con Estilo"
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Capturamos tu Cena de Graduación con Estilo
            </h2>
            <p className="text-lg text-gray-700">
              En Pineda Photography sabemos que la cena de graduación es un momento de celebración y logro. Nos especializamos en registrar la elegancia y los detalles de esta ocasión tan especial.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Desde los brindis hasta las conversaciones entre amigos, nos enfocamos en documentar esos instantes auténticos para que perduren en tu memoria.
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
              src="/images/cena-graduacion-incluye.jpg"
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
              Cobertura completa de la cena, desde la llegada de los invitados hasta los brindis.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Sesiones previas de retrato en el lugar de celebración y opciones de fotografías grupales y detalles decorativos.
            </p>
          </div>
        </div>

        {/* Espaciado entre cards */}
        <div className="h-10"></div>

        {/* Card 3 - Precios y Paquetes */}
        <div className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/cena-graduacion-precios.jpg"
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
              <strong>Paquete 1 (100,000₡):</strong> Incluye la cobertura total del evento de graduación, entregando la totalidad de fotografías realizadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 2 (180,000₡):</strong> Incluye la cobertura total del evento de graduación, entregando la totalidad de fotografías realizadas en alta resolución. Además de 1 hora previa al evento para fotografías individuales y familiares en recepción.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 3 (250,000₡):</strong> Incluye la cobertura total del evento de graduación, entregando la totalidad de fotografías realizadas en alta resolución. Además de 1 hora previa al evento para fotografías individuales y familiares en recepción. Este paquete también incluye la producción de un vídeo que recopila los mejores momentos a lo largo del evento(40 segundos a 1 minuto)
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Nota:</strong> Desplazamiento incluido en Nicoya y Santa Cruz. Otras ubicaciones con costo adicional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cenas;
