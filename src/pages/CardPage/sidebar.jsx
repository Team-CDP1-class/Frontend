import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStoryCard, postStoryCard } from "../../store/thunkFunction";

const SideBar = () => {
  const storyCard = useSelector((state) => state.cardStory.storyCardData);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addCard = async () => {
    let body = {};
    body.premise = null;
    body.setting = null;
    body.characters = null;
    body.outline = null;
    body.storycard_name = null;
  
    await dispatch(postStoryCard(body));
    await dispatch(getStoryCard());
    
    
    console.log(storyCard.length);
    navigate(`/cardpage/postcard/${storyCard.length}`);
    // window.location.reload();
  }

  let result = [];

  if(storyCard.length > 0) {
    result.push();
    for (let i = 0; i < storyCard.length; i++) {
      if(params.postId == i)
        result.push(
          <button className="card-button w-full h-40 bg-myColors-primary mt-5">{storyCard[i].storycard_name}</button>  
        );
      else
        result.push(
          <Link to={`/cardpage/postcard/${i}`}>
            <button className="card-button w-full h-40 mt-5">{storyCard[i].storycard_name}</button>
          </Link>
        );
    }
  }

  if(storyCard.length < 3)
    result.push(
      <button className="card-button w-full h-20 mt-5 text-large font-bold"
              onClick={addCard}>+</button>
    );

  return (
    <div
      className="h-auto w-64 p-5
  bg-myColors-background border-r border-myColors-gray"
    >
      {result}
    </div>
  );
};

export default SideBar;
