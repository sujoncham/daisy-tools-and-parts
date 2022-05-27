import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = () => {

const [rating, setRating] = useState(null);

    return (
        <div className='flex'>
            {[...Array(5)].map((star, i, index)=>{
                const ratingValue = i + 1;
                return <label index={index}>
                    <input 
                    type="radio"
                    name='rating' 
                    value={ratingValue}
                    onClick={()=>setRating(ratingValue)} 
                    />
                    <FaStar i={i} size={100} color={ratingValue <= rating ? '#ffc107': '#e4e5e9'} />
                </label>
            })}
            
        </div>
    );
};

export default StarRating;