import React from "react";

import ContactForm from "../ShareComponent/ContactForm";
import SocialConnect from "../ShareComponent/SocialConnect";

const Contact = () => {
  

  return (
    <div className="hero mt-20 mb-20">
      <div className="flex flex-col md:flex-row lg:flex-row m-3">
        <div className="w-full">
          <h1 className="text-3xl text-blue-500 font-bold">Contact with us on Social media</h1>
          <p className="py-2">
            We are highly recommend to contact us directly. Tell us your details
            and if it is possible to come and with talk us.
          </p>
          <SocialConnect></SocialConnect>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl text-yellow-500 text-center font-bold">Mail us</h1>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
