import React, { useState } from "react";
import ImageIcon from "./../../assets/icons/image.svg";
import FileIcon from "./../../assets/icons/file.svg";

const Details = () => {
  const [radioList, setRadioList] = useState([
    { label: "Virtual", active: true },
    { label: "Physical", active: false },
    { label: "Yet to be decided", active: false },
  ]);

  const handleRadio = (e) => {
    console.log("index", e.target.value);
    const newList = [];
    radioList.map((item, idx) => {
      if (idx == e.target.value) item.active = true;
      else item.active = false;

      newList.push({ label: item.label, active: item.active });
    });
    setRadioList(newList);
  };
  console.log(radioList);
  return (
    <div className="w-3/4 mx-auto my-12">
      <p className="text-grey-standard font-medium mb-4">
        Select the mode of event
      </p>
      <div className="flex justify-between gap-6 mb-12">
        {radioList.map((item, idx) => (
          <div
            key={idx}
            className={`w-full border-blue-standard rounded-[5px] bg-white ${
              item.active && "border"
            }`}
          >
            <div class="flex items-center p-4">
              <input
                checked={item.active}
                id={`default-radio-${idx}`}
                type="radio"
                value={idx}
                name="default-radio"
                class="w-4 h-4 text-white bg-gray-100 border-grey-darker focus:ring-blue-standard"
                onChange={handleRadio}
              />
              <label
                for={`default-radio-${idx}`}
                class={`ml-2 text-sm font-medium text-grey-standard dark:text-gray-300 ${
                  item.active && "font-bold !text-grey-darkest"
                }`}
              >
                {item.label}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-8 grid-cols-2 grid-rows-2">
        <textarea
          placeholder="Type a short summary to show as a snippet"
          className="p-3 rounded-md placeholder:text-sm"
        />
        <textarea
          placeholder="Enter the detailed description to display on event page"
          className="p-3 rounded-md placeholder:text-sm"
        />
        <div className="flex justify-center items-center bg-white rounded-md py-6">
          <div className="flex justify-center items-center flex-col">
            <div className="h-12 w-12 p-3 bg-grey-lighten rounded-2xl flex justify-center">
              <img src={ImageIcon} alt="Upload img" />
            </div>

            <p className="mt-4 font-bold"> Upload images</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white rounded-md">
          <div className="flex justify-center items-center flex-col">
            <div className="h-12 w-12 p-3 bg-grey-lighten rounded-2xl flex justify-center">
              <img src={FileIcon} alt="Upload img" />
            </div>

            <p className="mt-4 font-bold"> Upload flyer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
