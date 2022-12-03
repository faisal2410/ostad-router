import React from "react";
import { Carousel } from "antd";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";

const Hero = () => {
  
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img className="img-fluid" src={image1} alt="image1" />
        </div>
        <div>
          <img className="img-fluid" src={image2} alt="image2" />
        </div>
        <div>
          <img className="img-fluid" src={image3} alt="image3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
