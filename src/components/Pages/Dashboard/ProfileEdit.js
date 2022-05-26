import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileEdit = () => {
    const {profileId} = useParams();
    return (
        <div>
            <h1>Here edit you profile: {profileId}</h1>
        </div>
    );
};

export default ProfileEdit;