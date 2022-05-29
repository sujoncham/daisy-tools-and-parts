import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({purchase}) => {
 
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [cardSuccess, setCardSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const { _id, price, customer, customerName} = purchase;

  useEffect(()=>{
    fetch('https://hidden-beyond-54066.herokuapp.com/create-payment-intent', {
      method: 'POST',
       headers:{
         'content-type': 'application/json',
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
       },
       body: JSON.stringify({price})
    }).then(res => res.json())
    .then(data => {
      if(data?.clientSecret){
        setClientSecret(data?.clientSecret);
      }
      
    });
  }, [price]);


  const handleSubmit = async(event)=>{
      event.preventDefault();
      if(!stripe || !elements){
          return;
      }

      const card = elements.getElement(CardElement);
      if(card === null){
          return;
      }

      const { error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      setCardError(error?.message || paymentMethod?.message);
         setCardSuccess('');
         setProcessing(true);

       const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(clientSecret, {
         payment_method:{
           card:card,
           billing_details:{
            name:customerName, 
            email:customer,
           }
         }
       });


       if(intentError){
        setCardError(intentError?.message || '');
        setProcessing(false);
       } 
       else{
        setCardError('');
        setTransactionId(paymentIntent.id)
        console.log(paymentIntent);
        setCardSuccess('Congrats! payment successfull');

        // 
        const payment = {
          order: _id, 
          transactionId: paymentIntent.id,
        }
        
        
        fetch(`https://hidden-beyond-54066.herokuapp.com/purchase/${_id}`, {
          method: 'PATCH',
          headers:{
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }, 
          body: JSON.stringify(payment)
        })
        .then(res =>res.json())
        .then(data => {
          setProcessing(false);
          console.log(data);
        })
       }
  }

 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm mt-5 btn-accent" type="submit" disabled={!stripe || !clientSecret || cardSuccess}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-500">{cardError}</p>}
    {cardSuccess && <div className="text-green-500">
      <p>{cardSuccess}</p>
      <p>Your transactionId : {transactionId}</p>
      </div>
      }
    </>
  );
};

export default CheckoutForm;
