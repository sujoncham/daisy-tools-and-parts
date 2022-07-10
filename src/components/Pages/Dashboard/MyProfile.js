import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://hidden-beyond-54066.herokuapp.com/myProfile?email=${user?.email}`, {
            method:'GET',
            headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setProfile(data);
        })
    }, [user]);

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
                <h1>{profile.name}</h1>
            </div>
           
               
        </div>
    );
};

export default MyProfile;