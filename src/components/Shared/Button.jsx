import React from "react";

const Button = ({ label, customStyle }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-md ${customStyle}`}
    >
      <div className={`px-6 py-4 font-bold text-base`}>{label}</div>
    </div>
  );
};

export default Button;
