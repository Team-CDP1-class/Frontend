import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const storyCard = useSelector((state) => state.cardStory.storyCardData);

  return (
    <div
      className="h-auto w-64 p-5
  bg-myColors-background border-r border-myColors-gray"
    >
      <div>
        {storyCard.map((card) => (
          <div>card</div>
        ))}
      </div>
      <button className="card-button w-full h-40 bg-myColors-primary">test1</button>
      <button className="card-button w-full h-40 mt-5">test2</button>
      <Link to="./postcard">
        <button className="card-button w-full h-20 mt-5 text-large font-bold">+</button>
      </Link>
    </div>
  );
};

export default SideBar;
