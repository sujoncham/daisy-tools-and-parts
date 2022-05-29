import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://hidden-beyond-54066.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-3xl text-center mt-16 mb-8">Client Reviews</h1>
      <div className="divider w-56 m-auto mt-1 mb-10">
          <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
              </div>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {reviews.map((review) => (
          <div
            key={review._id}
            tool={review}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body flex justify-between">
              <img className="w-12 rounded-full" src={review.img} alt="" />
              <div className="text-start">
              <p>{review.description}</p>
              <h2 className="card-title">{review.name}</h2>
              <p>Rating: {review.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
