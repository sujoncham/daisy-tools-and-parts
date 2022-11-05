import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

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
    
        fetch("https://daisy-tools-parts.onrender.com/inbox", {
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
    );
};

export default ContactForm;