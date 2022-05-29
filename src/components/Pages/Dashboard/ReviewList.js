import React, { useEffect, useState } from 'react';

const ReviewList = () => {

    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://hidden-beyond-54066.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


    return (
        <div className='mt-10'>
            <h1 className='text-2xl'>Reviews List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Reviews</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       reviews.map((review, index) => <tr key={review._id} index={index}>
                        <th>{index +1}</th>
                        <td>{review.name}</td>
                        <td>{review.description.slice(0, 35)}</td>
                        <td>{review.rating}</td>
                        <td><button className='btn btn-sm'>Delete</button> </td>
                    </tr>)
                   }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewList;