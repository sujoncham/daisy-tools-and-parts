import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
  "pk_test_51L0ndhIcKywkuGHWCujTFl3VGBGJvnKhkty3VHv64xPJOLJCYjIzNifStjHabpQlM9uEMerJDbZgxNzOBnnCHWmX00FYzO04Sx"
);

const Payment = () => {
  const { payId } = useParams();

  const url = `https://daisy-tools-parts.onrender.com/purchase/${payId}`;
  const { data: purchase, isLoading } = useQuery(["purchase", payId], () =>
    fetch(url, {
        method:'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="mt-20">
        <h1>Params Id: {payId}</h1>
      <div className="mb-20">
      
        <div className="w-75 max-w-md bg-base-100 shadow-xl p-10 mb-10">
          <p>Hello, {purchase.customer}</p>
          <h1 className="text-2xl font-bold">
            you are taking <span className="text-red-500">{purchase.name}</span> this service.
          </h1>
          <p>date - {purchase.date}</p>
         
          <p className="py-6">
            You have to pay for this service <span className="text-red-500">${purchase.price*purchase.quantity}</span>
          </p>
        </div>
        <div className="card w-75 max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
         
            <Elements stripe={stripePromise}>
              <CheckoutForm purchase={purchase}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
