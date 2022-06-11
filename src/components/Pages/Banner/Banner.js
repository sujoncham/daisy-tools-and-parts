import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../../../assets/images/banner.jpg";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";

const Banner = () => {
  return (
    <Carousel autoPlay>
      <div>
        <img className="w-100" src={banner} alt="" />
        {/* <p className="legend">Strong and sustainable</p> */}
      </div>
      <div>
        <img className="w-100" src={banner1} alt="" />
        {/* <p className="legend">Attractive Design and Collection</p> */}
      </div>
      <div>
        <img className="w-100" src={banner2} alt="" />
        {/* <p className="legend">All tools are Tested by Experts</p> */}
      </div>
      <div>
        <img className="w-100" src={banner3} alt="" />
        {/* <p className="legend text-3xl">Our focus our Service</p> */}
      </div>
    </Carousel>
  );
};

export default Banner;
