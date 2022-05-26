import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { toast } from "react-toastify";
import auth from '../Firebase/Firebase.init';
import '../StarRating/StarRating.css';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState(null);
    
  const imageStoreKey = "0a88ddefc27d62bd7063e3b8adb8b307";

  const onSubmit = async (data) => {
   
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const product = {
            name: data.name,
            description: data.description,
            img: img,
            rating:rating
          };

          fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("added successfully");
                reset();
              }
            });
        }
      });
  };

    return (
        <div className="flex flex-col items-center justify-center mt-12 mb-12">
      <div className="w-96">
        <h1 className="text-3xl">Add Your Reviews</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  }
                })}
                type="text"
                value={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea 
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required",
                }
              })}
              type="text"
              name="description"
              className="textarea textarea-bordered" 
               placeholder="description"></textarea>
              {errors.description?.type === "required" && <span className="text-red-500">{errors.description?.message}</span>}
             
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is required",
                  }
                })}
                type="file"
                name="image"
                className="input input-bordered"
              />
              {errors.image?.type === "required" && <span className="text-red-500">{errors.image?.message}</span>}
          
            </div>

            <div className='flex justify-start items-center mt-5 mb-5'>
                  <h1>Ratings : </h1>
            <div className='flex justify-start m-4'>
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i + 1;
                return <label key={i} star={star}>
                    <input 
                    type="radio"
                    name='rating' 
                    value={ratingValue}
                    onClick={()=>setRating(ratingValue)} 
                    />
                    
                    <FaStar size={25} i={i}
                    color={ratingValue <= rating ? '#ffc107': '#e4e5e9'} 
                    onClick={()=>setRating(null)}
                    />
                </label>
            })}
            </div>
            
        </div>


            <div className="form-control mt-6 w-full max-w-xs">
              <button type="submit" className="btn btn-primary">
                Add Review
              </button>
            </div>
          
          </form>
      </div>
    </div>
    );
};

export default AddReview;