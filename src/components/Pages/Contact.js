import React from "react";
import { toast } from "react-toastify";

const Contact = () => {

  const contactForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const opinion = event.target.opinion.value;
          const contactEmail = {
            name,
            email,
            subject,
            opinion,
          };

          fetch("http://localhost:5000/inbox", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(contactEmail),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("added successfully");
              event.target.reset();
              }
            });
        }


  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="flex flex-col-2 items-center justify-center mt-12 mb-12">
    <div className="text-center w-96">
      <h1 className="text-5xl font-bold">Contact with us</h1>
      <p className="py-2">We are highly recommend to contact us directly. Tell us your details and if it is possible to come and with talk us.</p>
    </div>
    <div className="card w-96 shadow-2xl bg-base-100">
        <form onSubmit={contactForm}>
        <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="enter name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" name="subject" placeholder="enter subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Opinion</span>
          </label>
          <textarea 
              type="text"
              name="opinion"
              className="textarea textarea-bordered" 
               placeholder="description"></textarea>
      
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
        </form>
    </div>
  </div>
</div>
  );
};

export default Contact;
