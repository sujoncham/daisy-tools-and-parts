import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const myStyle ={
  width:'35px',
  height:'35px',
  marginRight: '10px'
}

const Login = () => {

  const [ signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  if (error || gError) {
    return <p>Error: {error?.message}</p>
  }
  if (loading || gLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  if (user || gUser) {
   console.log(user);
      
  }

  const handleFormLogin =(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log('submitted form', email, password);


    signInWithEmailAndPassword(email, password);

  }


  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-96">
        <h1 className="text-3xl">Login</h1>
        <form onSubmit={handleFormLogin}>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password here"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-success mt-10">Login</button>
        </form>
        <p>New at Daisy Tools? Please, <Link to='/register' className="text-primary">Create account</Link> here</p>
        <div className="divider">OR</div>
        <div className="text-center">
            <button onClick={() => signInWithGoogle()}className="btn btn-success"><img style={myStyle} src="https://i.ibb.co/TL9tBnZ/google.png" alt="" /> sign in with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
