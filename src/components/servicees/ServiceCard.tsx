const ServiceCard = ({ title, description, image, isReversed }: {
    title: string;
    description: string;
    image: string;
    isReversed?: boolean;
  }) => {
    return (
      <div className={`w-full flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} items-center bg-gray-100 py-16 px-8`}>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt={title} className="w-full max-w-md md:max-w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  