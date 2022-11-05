import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../../hooks/useProfile';
import auth from '../../Firebase/Firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile] = useProfile(auth);
    const navigate = useNavigate();
    console.log(profile);

 

    const handleEditForm = (id) => {
        navigate(`/dashboard/profileEdit/${id}`);
      };

    return (
        <div className='mt-10'>
            <h1 className='text-2xl border-b-4'>
                View My Profile : 
                <button onClick={() => handleEditForm(profile._id)} className="btn btn-sm m-3"> edit</button>
            </h1>

            <div>
                <img src={profile.img} alt="" />
                <h1>{user.displayName}</h1>
                <h1>{user.email}</h1>
                <h1>Full Name: {profile.fname}</h1>
                <h1>Phone Number: {profile.phone}</h1>
                <h1>Address: {profile.address}</h1>
                <h1>About Me: {profile.description}</h1>
                <h1>Qualification: {profile.education}</h1>
                <h1>Skills: {profile.skills}</h1>
                <h1>Experience: {profile.experience}</h1>
           
            </div>
           
               
        </div>
    );
};

export default MyProfile;