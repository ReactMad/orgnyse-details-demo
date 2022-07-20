import React from "react";
import Button from "../../Shared/Button";

const Footer = () => {
  const progTxt = "16 items to submit";
  return (
    <div className="w-full">
      <div className="relative w-full border-b border-grey-light before:absolute before:w-1/2 before:border-blue-standard before:border-b-2 before:-top-[1px] before:left-0"></div>
      <div className="flex justify-between items-center mx-20 my-4">
        <Button
          label="Back"
          customStyle="text-grey-darkest bg-transparent border border-grey-light"
        />
        <p>{progTxt}</p>
        <Button label="Next" customStyle="text-white bg-blue-standard" />
      </div>
    </div>
  );
};

export default Footer;
