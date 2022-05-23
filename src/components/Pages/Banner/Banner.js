import React from "react";
import banner from '../../../assets/images/banner.png';

const myStyle = {
  backgroundImage:`${banner}`,
  backgroundSize: 'cover',
  backgroundPosition:'center',
  backgroundRepeat: 'no-repeat',
  height: '450px'
};

const Banner = () => {
  return (
    <div style={myStyle}>
      <h1>Banner</h1>
    </div>
  );
};

export default Banner;
