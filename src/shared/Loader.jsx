import React, { useContext } from "react";

const Loader = () => {
  return (
    <div className="relative h-1 w-full bg-gray-200  overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-red-500 "
        style={{
          width: "50%",
          animation: "fill-progress 1s ease-in-out infinite",
        }}
      ></div>
    </div>
  );
};

export default Loader;
