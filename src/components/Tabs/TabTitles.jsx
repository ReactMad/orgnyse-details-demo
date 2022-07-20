import React from "react";

const TabTitles = ({}) => {
  const titleList = [
    {
      label: "Category",
      status: false,
    },
    {
      label: "Details",
      status: true,
    },
    {
      label: "Date & Value",
      status: false,
    },
    {
      label: "Ticket",
      status: false,
    },
    {
      label: "Code",
      status: false,
    },
    {
      label: "Customer",
      status: false,
    },
    {
      label: "Design",
      status: false,
    },
    {
      label: "Payment",
      status: false,
    },
    {
      label: "Pricing",
      status: false,
    },
  ];
  return (
    <div className="relative before:absolute before:w-full before:h-full before:right-0 before:top-0 before:border-b before:border-grey-light before:-z-10">
      <ul className="flex justify-between mx-auto w-3/4">
        {titleList.map((item, idx) => (
          <li
            key={idx}
            className={`font-medium text-grey-lighter pb-3 hover:font-bold hover:text-grey-darkest hover:cursor-pointer ${
              item.status &&
              "!text-blue-standard border-b-2 border-blue-standard font-bold"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabTitles;
