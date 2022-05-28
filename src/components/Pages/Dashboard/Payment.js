// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";
// import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


// const stripePromise = loadStripe(
//   "pk_test_51L0ndhIcKywkuGHWCujTFl3VGBGJvnKhkty3VHv64xPJOLJCYjIzNifStjHabpQlM9uEMerJDbZgxNzOBnnCHWmX00FYzO04Sx"
// );

const Payment = () => {
  const { payId } = useParams();

//   const url = `http://localhost:5000/purchase/${payId}`;
//   const { data: purchase, isLoading } = useQuery(["purchase", payId], () =>
//     fetch(url, {
//         method:'GET',
//       headers: {
//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     }).then((res) => res.json())
//   );

//   if (isLoading) {
//     return <LoadingSpinner></LoadingSpinner>;
//   }

  return (
    <div  className="flex justify-center items-center mt-20">
        <h1>Params Id: {payId}</h1>
      {/* <div>
      <h2 className="text-2xl font-bold">Patient Id: {payId}</h2>
        <div className="w-75 max-w-md bg-base-100 shadow-xl p-10 mb-10">
          <p>Hello, {purchase.customer}</p>
          <h1 className="text-2xl font-bold">
            you are taking {purchase.productName} this service.
          </h1>
          <p>date - {purchase.date}</p>
         
          <p className="py-6">
            You have to pay for this service ${purchase.price}
          </p>
        </div>
        <div className="card w-75 max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm purchase={purchase}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Payment;
