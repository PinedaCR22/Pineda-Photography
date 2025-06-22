import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "#D3D3D3",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "#D3D3D3",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  const photos = [
    { id: 1, src: "/images/BODA.jpeg", title: "Bodas" },
    { id: 2, src: "/images/15 AÑOS.jpeg", title: "15 años" },
    { id: 3, src: "/images/BABY SHOWER.jpeg", title: "Baby shower" },
    { id: 4, src: "/images/AMBIENTE.jpeg", title: "Fotos al aire libre" },
    { id: 5, src: "/images/ESTUDIO.jpeg", title: "Fotos tipo estudio" },
    { id: 6, src: "/images/DEPORTE.jpeg", title: "Fotos deportivas" },
    { id: 7, src: "/images/REINADO.jpeg", title: "Certámenes de belleza" },
    { id: 8, src: "/images/PROPIEDAD.jpeg", title: "Fotografías a propiedades" },
    { id: 9, src: "/images/CENA.jpeg", title: "Cenas de graduación" },
    { id: 10, src: "/images/GRADUACIÓN.jpeg", title: "Graduaciones" },
  ];

  const firstCarouselPhotos = photos.slice(0, 5);
  const secondCarouselPhotos = photos.slice(5, 10);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="w-5/6 mx-auto">
        <p className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Parte de nuestros trabajos en fotografía
        </p>

        {/* Primer Carrusel */}
        <Slider {...settings}>
          {firstCarouselPhotos.map((photo) => (
            <div key={photo.id} className="p-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-72 w-full object-cover object-top"
                />
                <div className="p-4 text-center">
                  <p className="text-lg font-semibold">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="my-8" />

        {/* Segundo Carrusel */}
        <Slider {...settings} rtl={true}>
          {secondCarouselPhotos.map((photo) => (
            <div key={photo.id} className="p-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-72 w-full object-cover object-top"
                />
                <div className="p-4 text-center">
                  <p className="text-lg font-semibold">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoCarousel;
