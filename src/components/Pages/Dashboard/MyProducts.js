import React from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import RowProduct from "./RowProduct";

const MyProducts = () => {
  const { data: tools, isLoading, refetch } = useQuery(['tools'], () =>
    fetch('https://daisy-tools-parts.onrender.com/products').then((res) => res.json()));

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <h1 className="text-3xl mt-10">Manage Products : {tools.length}</h1>
      <div className="overflow-y-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
               tools?.map((tool, index) => <RowProduct 
               index={index}
                key={tool._id} 
                tool={tool} 
                refetch={refetch}
                ></RowProduct>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
