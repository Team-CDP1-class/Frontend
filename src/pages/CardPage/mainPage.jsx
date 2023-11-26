import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const storyCard = useSelector((state) => state.cardStory.storyCardData);

  if(storyCard.length > 0) 
    navigate("/cardpage/postcard/0");
  else
    return (<div></div>);
  return (
    <div></div>
  );
};

export default MainPage;
