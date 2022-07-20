import React from "react";
import TabTitles from "../../Tabs/TabTitles";

const PageHeader = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-3/4 mx-auto pt-12">
        <a href="#" className="text-blue-standard mb-4 mt-12">
          Save & back to events list
        </a>
        <h1 className="font-bold text-[2.5rem] mb-12">Create new event</h1>
      </div>
      <TabTitles />
    </div>
  );
};

export default PageHeader;
