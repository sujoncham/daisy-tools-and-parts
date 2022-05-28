import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-40 h-40 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
