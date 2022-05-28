import React from "react";

const myStyle = {
  width: "200px",
};

const Profile = ({ profile }) => {
    const {name, email, phone, description, address, skills, experience, education, img} = profile;

  

  return (
    <div className="w-full p-20">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-14 justify-center items-center">
        <img style={myStyle} src={img} alt="" />
        <div>
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{phone}</h1>
          <h1>{address}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="mt-10">
              <div className="mb-10">
              <h1 className="text-2xl font-bold">About me:</h1>
            <h1>{description}</h1>
          </div>
          <div className="mb-10">
          <h1 className="text-2xl font-bold">My Skills:</h1>
            <h1>{skills}</h1>
          </div>
          </div>
          <div className="mt-10">
          <div className="mb-10">
          <h1 className="text-2xl font-bold">My Experiences:</h1>
            <h1>{experience}</h1>
          </div>
          <div>
          <h1 className="text-2xl font-bold">My Qualification:</h1>
            <h1>{education}</h1>
          </div>
          </div>

          

      </div>
    </div>
  );
};

export default Profile;
