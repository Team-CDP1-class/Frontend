import React from "react";

const SideBar = () => {
  return (
    <div
      className="h-auto w-64 p-5
  bg-myColors-background border-r border-myColors-gray"
    >
      <button className="card-button w-full h-40 bg-myColors-primary">test1</button>
      <button className="card-button w-full h-40 mt-5">test2</button>
      <button className="card-button w-full h-20 mt-5 text-large font-bold">+</button>
    </div>
  );
};

export default SideBar;