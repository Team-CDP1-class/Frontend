import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function addCard() {

}

function show_component(cardId, data) {
  let result = [];

  if(data.length > 0) {
    result.push();
    for (let i = 0; i < data.length; i++) {
      if(cardId == i)
        result.push(
          <button className="card-button w-full h-40 bg-myColors-primary mt-5">{data[i].storycard_name}</button>  
        );
      else
        result.push(
          <Link to={`/cardpage/postcard/${i}`}>
            <button className="card-button w-full h-40 mt-5">{data[i].storycard_name}</button>
          </Link>
        );
    }
  }

  if(data.length < 3)
    result.push(
      <button className="card-button w-full h-20 mt-5 text-large font-bold"
              onClick={addCard}>+</button>
    );


  return result;
}

const SideBar = () => {
  const storyCard = useSelector((state) => state.cardStory.storyCardData);
  const params = useParams();

  return (
    <div
      className="h-auto w-64 p-5
  bg-myColors-background border-r border-myColors-gray"
    >
      {show_component(params.postId, storyCard)}
    </div>
  );
};

export default SideBar;
