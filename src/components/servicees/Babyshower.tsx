import Navbar from "../../layout/Navbar";

const BabyShower = () => {
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
              src="/images/babyshower-intro.jpg" 
              alt="Capturamos la Dulzura de tu Baby Shower" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Capturamos la Dulzura de tu Baby Shower
            </h2>
            <p className="text-lg text-gray-700">
              Un baby shower es un momento especial para celebrar la llegada de un nuevo miembro a la familia. 
              En Pineda Photography nos encargamos de capturar cada sonrisa, emoción y detalles de este día tan especial.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Desde las decoraciones, los juegos y las interacciones con familiares y amigos, 
              buscamos que cada fotografía refleje el amor y la felicidad del evento.
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
              src="/images/babyshower-incluye.jpg" 
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
              Nuestro servicio de fotografía para baby shower incluye cobertura completa del evento, 
              sesiones con los futuros padres, familiares e invitados, así como capturas de la decoración y regalos.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Además, ofrecemos sesiones previas con los padres, tomas espontáneas durante los juegos y 
              detalles en alta calidad que harán de este evento un recuerdo inolvidable.
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
              src="/images/babyshower-precios.jpg" 
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
              <strong>Paquete 1 (70,000₡):</strong> Incluye la cobertura total del evento, entregando la totalidad de fotografías realizadas en alta resolución.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 2 (90,000₡):</strong> Incluye la cobertura total del evento, entregando la totalidad de fotografías realizadas en alta resolución. Además de una sesión previa de 15 fotografías a la pareja.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Paquete 3 (170,000₡):</strong> Incluye la cobertura total del evento, entregando la totalidad de fotografías realizadas en alta resolución. Además de una sesión previa de 15 fotografías con pareja. Este paquete también incluye un video editado recopilando los mejores momentos del baby shower(40 segundos a 1 minuto)
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

export default BabyShower;
