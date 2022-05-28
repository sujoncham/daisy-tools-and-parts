
import React, { useEffect } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";
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
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(user || gUser);

  let from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    if (token) {
      navigate(from, { replace: true }); 
    }
  
  }, [token, navigate, from]);

  if (error || gError || resetError) {
    return <p>Error: {error?.message} {gError?.message} {resetError?.message}</p>
  }

  if (loading || gLoading || sending) {
    return <LoadingSpinner></LoadingSpinner>
  }

  const handleFormLogin = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
   if(email){
    signInWithEmailAndPassword(email, password);
   } else{
     navigate('/');
   }

  }

  const passwordReset = async (event) =>{
    const email = event.target.value;
        await sendPasswordResetEmail(email);
          toast('Sent email');
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
              required
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
              required
            />
          </div>
          <button className="btn btn-success w-96 mt-10">Login</button>
        </form>
        <p className="mb-10">Forgot Password? <button className="text-green-500" onClick={passwordReset} >Reset password</button> </p>

        <p>New at Daisy Tools? Please, <Link to='/register' className="text-primary">Create account</Link> here</p>
        <div className="divider">OR</div>
        <div className="text-center">
            <button onClick={() => signInWithGoogle()}className="btn btn-success w-96"><img style={myStyle} src="https://i.ibb.co/TL9tBnZ/google.png" alt="" /> sign in with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
