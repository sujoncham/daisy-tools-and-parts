import React from "react";
import banner from '../../../assets/images/banner.png';


const myStyle = {
  backgroundImage:`url(${banner})`,
  backgroundSize: 'cover',
  backgroundPosition:'center',
  backgroundRepeat: 'no-repeat',
  height: '450px'
};

const Banner = () => {
  return (
    <div style={myStyle}>
      
    </div>
  );
};

export default Banner;
