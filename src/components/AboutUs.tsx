const AboutUs = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-gray-100 py-16 px-8">
      {/* Imagen a la izquierda */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="/images/QUIENES SOMOS.jpeg" 
          alt="Quiénes Somos" 
          className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
        <p className="text-lg text-gray-700">
          Somos una empresa especializada en fotografía y producción audiovisual. 
          Dedicada a capturar y contar historias de manera única y creativa. 
          Nuestro equipo está conformado por profesionales apasionados por el arte visual, 
          nuestro objetivo es ofrecer resultados que no sólo cumplan, 
          sino que superen las expectativas de nuestros clientes, 
          inmortalizando momentos y llevando ideas al siguiente nivel.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;