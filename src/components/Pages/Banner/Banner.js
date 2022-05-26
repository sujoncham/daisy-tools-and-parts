import React from "react";
import banner from '../../../assets/images/banner.png';
import StarRating from "../../StarRating/StarRating";


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
      <h1>Banner</h1>
      <StarRating></StarRating>
    </div>
  );
};

export default Banner;
