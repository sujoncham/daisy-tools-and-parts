import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link to='/' className="btn btn-circle">❮</Link> 
                <Link to='/' className="btn btn-circle">❯</Link>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link to='/' className="btn btn-circle">❮</Link>
                <Link to='/' className="btn btn-circle">❯</Link>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link to='/' className="btn btn-circle">❮</Link>
                <Link to='/' className="btn btn-circle">❯</Link>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" alt='' /> 
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link to='/' className="btn btn-circle">❮</Link>
                <Link to='/' className="btn btn-circle">❯</Link>
                </div>
            </div>
            </div>
    );
};

export default Banner;