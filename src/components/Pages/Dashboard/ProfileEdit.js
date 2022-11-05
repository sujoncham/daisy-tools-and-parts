import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileEdit = () => {
  const { profileEdit } = useParams();
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit} = useForm();

  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    fetch(`https://daisy-tools-parts.onrender.com/myProfile?profile=${profileEdit}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [profileEdit]);

  const imageStoreKey = "a899e6af093c7dcba331d3bcc7b87039";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const fname = data.fullName;
          const username = data.username;
          const email = data.email;
          const description = data.description;
          const phone = data.phone;
          const address = data.address;
          const experience = data.experience;
          const skills = data.skills;
          const education = data.education;

          const product = {
            username,
            email,
            fname,
            phone,
            description,
            address,
            experience,
            skills,
            education,
            img: img,
          };

          fetch(`https://daisy-tools-parts.onrender.com/myProfile`, {
            method: "PUT",
            headers: {
              "content-type" : "application/json",
              authorization : `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                toast("added successfully");
                navigate('dashboard/profile');
              }
            });
        }
      });
  };

  return (
    <div>
      <h1>Here edit you profile: {profileEdit}</h1>

      <div className="mt-12 mb-20">
        <h1 className="text-3xl w-96 border-b-4 mb-10">Update Profile</h1>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="flex-auto w-64">
              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name='username'
                />
              </div>

              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="input input-bordered"
                  placeholder="enter full name"
                />
              </div>
              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  name='email'
                />
              </div>
              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone is required",
                    },
                  })}
                  type="number"
                  name="phone"
                  className="input input-bordered"
                  autoComplete="off"
                />
                {errors.phone?.type === "required" && (
                  <span className="text-red-500">{errors.phone?.message}</span>
                )}
              </div>
              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">About me</span>
                </label>
                <textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "description is required",
                    },
                  })}
                  type="text"
                  name="description"
                  value={profile.description}
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.description?.type === "required" && (
                  <span className="text-red-500">
                    {errors.description?.message}
                  </span>
                )}
              </div>
              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  {...register("address", {
                    required: {
                      value: true,
                      message: "address is required",
                    },
                  })}
                  type="text"
                  name="address"
                  value={profile.address}
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.address?.type === "required" && (
                  <span className="text-red-500">
                    {errors.address?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex-auto w-64">
              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">My Experiences</span>
                </label>
                <textarea
                  {...register("experience", {
                    required: {
                      value: true,
                      message: "experience is required",
                    },
                  })}
                  type="text"
                  name="experience"
                  value={profile.experience}
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.experience?.type === "required" && (
                  <span className="text-red-500">
                    {errors.experience?.message}
                  </span>
                )}
              </div>

              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">My Skills</span>
                </label>
                <textarea
                  {...register("skills", {
                    required: {
                      value: true,
                      message: "skills is required",
                    },
                  })}
                  type="text"
                  name="skills"
                  value={profile.skills}
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.skills?.type === "required" && (
                  <span className="text-red-500">{errors.skills?.message}</span>
                )}
              </div>

              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Accademic Qualificatioin</span>
                </label>
                <textarea
                  {...register("education", {
                    required: {
                      value: true,
                      message: "education is required",
                    },
                  })}
                  type="text"
                  name="education"
                  value={profile.education}
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.education?.type === "required" && (
                  <span className="text-red-500">
                    {errors.education?.message}
                  </span>
                )}
              </div>

              <div className="form-control max-w-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("image", {
                    required: {
                      value: true,
                      message: "image is required",
                    },
                  })}
                  type="file"
                  name="image"
                  value={profile.img}
                  className="input input-bordered"
                />
                {errors.image?.type === "required" && (
                  <span className="text-red-500">{errors.image?.message}</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-96">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
