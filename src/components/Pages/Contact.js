import React from "react";

const Contact = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="flex flex-col-2 items-center justify-center mt-12 mb-12">
    <div class="text-center w-96">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card w-96 shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="enter name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input type="text" placeholder="enter subject" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Opinion</span>
          </label>
          <textarea 
              type="text"
              name="opinion"
              className="textarea textarea-bordered" 
               placeholder="description"></textarea>
      
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Contact;
