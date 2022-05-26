import React, { useEffect, useState } from 'react';
import Profile from './Profile';

const MyProfile = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/myProfile')
        .then(res => res.json())
        .then(data =>{
            setProfiles(data);
        })
    }, [])

    return (
        <div>
            <h1>My Profile : </h1>
            <div>
                {
                    profiles.map(profile => <Profile key={profile._id} profile={profile}></Profile>)
                }
            </div>
        </div>
    );
};

export default MyProfile;