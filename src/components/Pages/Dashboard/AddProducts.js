import React from "react";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

const AddProducts = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
  const imageStoreKey = "0a88ddefc27d62bd7063e3b8adb8b307";

  const onSubmit = async (data) => {
   
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const product = {
            name: data.name,
            price: data.price,
            quantity:data.quantity,
            description: data.description,
            img: img,
          };

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("added successfully");
                reset();
              }
            });
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-12">
      <div className="w-96">
        <h1 className="text-3xl">Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  }
                })}
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                autoComplete='off'
              />
              {errors.name?.type === "required" && <span className="text-red-500">{errors.name?.message}</span>}
             
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is required",
                  }
                })}
                type="number"
                name="price"
                placeholder="price"
                className="input input-bordered"
                autoComplete='off'
              />
              {errors.price?.type === "required" && <span className="text-red-500">{errors.price?.message}</span>}
             
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "quantity is required",
                  }
                })}
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered"
                autoComplete='off'
              />
              {errors.quantity?.type === "required" && <span className="text-red-500">{errors.quantity?.message}</span>}
             
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea 
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required",
                }
              })}
              type="text"
              name="description"
              className="textarea textarea-bordered" 
               placeholder="description"></textarea>
              {errors.description?.type === "required" && <span className="text-red-500">{errors.description?.message}</span>}
             
            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is required",
                  }
                })}
                type="file"
                name="image"
                className="input input-bordered"
                
              />
              {errors.image?.type === "required" && <span className="text-red-500">{errors.image?.message}</span>}
          
            </div>


            <div className="form-control mt-6 w-full max-w-xs">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          
          </form>
      </div>
    </div>
  );
};

export default AddProducts;
