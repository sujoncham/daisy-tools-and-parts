import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Profile from './Profile';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
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
            setProfiles(data);
        })
    }, [user]);

    const handleEditForm = () => {
        navigate(`/dashboard/profileEdit/${user?.email}`);
      };

    return (
        <div className='mt-10'>
            <h1 className='text-2xl border-b-4'>
                My Profile : 
                <button onClick={() => handleEditForm(user?.email)} className="btn btn-sm m-3"> edit</button>
            </h1>
           
                {
                    profiles.map(profile => <Profile key={profile._id} profile={profile}></Profile>)
                }
            
        </div>
    );
};

export default MyProfile;