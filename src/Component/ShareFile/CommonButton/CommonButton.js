import React from "react";

const CommonButton = ({children}) => {
  return (
    <div>
      <button className="btn bg-[#F27A44] rounded-full text-white">
        {children}
      </button>
    </div>
  );
};

export default CommonButton;
