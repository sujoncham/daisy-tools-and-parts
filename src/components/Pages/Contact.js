import React from "react";
import { FaFacebook, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
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

    fetch("https://hidden-beyond-54066.herokuapp.com/inbox", {
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
  };

  return (
    <div className="hero mt-20 mb-20">
      <div className="flex flex-col-2 items-center justify-center mt-12 mb-12 gap-5">
        <div className="w-full">
          <h1 className="text-3xl text-blue-500 font-bold">Contact with us on Social media</h1>
          <p className="py-2">
            We are highly recommend to contact us directly. Tell us your details
            and if it is possible to come and with talk us.
          </p>
          <div className='flex gap-5 mt-5'>
              <Link as={Link} to='https://twitter.com/' className="link link-hover"><FaTwitter size={25} color={'#e09f11'}></FaTwitter></Link>
              <Link to='https://facebook.com/' className="link link-hover"><FaFacebook size={25} color={'#e09f11'}></FaFacebook> </Link>
              <Link to='https://www.google.com/gmail/' className="link link-hover"><FaGooglePlusG size={25} color={'#e09f11'}></FaGooglePlusG></Link>
              <Link to='https://youtube.com/' className="link link-hover"><FaYoutube size={25} color={'#e09f11'}></FaYoutube></Link>
              <Link to='https://linkedin.com/' className="link link-hover"><FaLinkedinIn size={25} color={'#e09f11'}></FaLinkedinIn></Link>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl text-blue-500 font-bold">Our Address</h1>
            <address className="mt-5">
              <p>Kamal Atartuk Avenue, <br /> Banani, Dhaka-1213</p>
              <p>Phone : +012455663</p>
              <p>Website : www.daisytools.com</p>
            </address>
          </div>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl text-yellow-500 text-center font-bold">Mail us</h1>
          <form onSubmit={contactForm}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="enter subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Opinion</span>
                </label>
                <textarea
                  type="text"
                  name="opinion"
                  className="textarea textarea-bordered"
                  placeholder="description"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
