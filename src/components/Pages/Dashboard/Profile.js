import React from 'react';
import { useNavigate } from "react-router-dom";

const myStyle = {
    width: '120px'
}

const Profile = ({profile}) => {
    const {_id, name, email, phone, description, address, skills, experience, education, img} = profile;
    const navigate = useNavigate();

    const handleEditForm = (_id) =>{
        navigate(`profileEdit/${_id}`);
    }

    return (
        <div>
            <button onClick={()=>handleEditForm(_id)} className='btn btn-sm'>edit</button>
            <div>
            <img style={myStyle} src={img} alt="" />
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>{description}</h1>
            <h1>{address}</h1>
            <h1>{skills}</h1>
            <h1>{experience}</h1>
            <h1>{education}</h1>
            </div>
            
        </div>
    );
};

export default Profile;