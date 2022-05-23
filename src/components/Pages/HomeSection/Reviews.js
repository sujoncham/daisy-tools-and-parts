import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mb-20">
      <h1 className="text-3xl text-center mt-16 mb-16">Client Reviews</h1>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
