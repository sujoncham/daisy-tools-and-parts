import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const slides = [
  {
    id: 1,
    title: "First Slide",
    link: "https://i.ibb.co/Lgsw9j7/customer.jpg"
  },
  {
    id: 2,
    title: "Second Slide",
    link: "https://i.ibb.co/h2D3k0p/service.jpg"
  },
  {
    id: 3,
    title: "Third Slide",
    link: "https://i.ibb.co/yNSV1qz/best-quality.jpg"
  },
  {
    id: 4,
    title: "Fourth Slide",
    link: "https://i.ibb.co/wC6ZFqH/quality.jpg"
  }
];

const Banner = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
    };
    const slidePrev = (e) => {
        setCurrentSlide((prev) => {
        return prev === 0 ? slides.length - 1 : currentSlide - 1;
        });
    };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div>
            <Slide
                image={slides[currentSlide]}
                slideNext={slideNext}
                slidePrev={slidePrev}
            />
        </div>
  );
};

export default Banner;

const Slide = (props) => {
  return (
    <div className="shadow-2xl transition">
      <img className="transition" src={props.image.link} alt="Sliderr_image" />
      <h1 className="text-3xl text-center -mt-20 uppercase font-bold">
        {props.image.title}
      </h1>
        <div className="flex justify-center gap-5">
          <button className="btn btn-sm" onClick={props.slidePrev}>
            {"<"} 
          </button>
          
          <button className="btn btn-sm" onClick={props.slideNext}>
            {">"} 
          </button>
        </div>
    </div>
  );
};
