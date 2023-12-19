import React from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./Sections/NavItem";
import { useDispatch, useSelector } from "react-redux";
import { getStoryCard } from "../../store/thunkFunction";

const Navbar = () => {
  const storyCard = useSelector((state) => state.cardStory.storyCardData);
  const dispatch = useDispatch();
  let navElement = [];

  const cardNavget = async () => {
    await dispatch(getStoryCard());
    window.location.reload();
  };

  if (storyCard.length == 0) {
    navElement.push(
      <Link to="/cardpage/postcard">
        <button className="navbarMenu" onClick={cardNavget}>
          스토리 카드
        </button>
      </Link>
    );
  } else {
    navElement.push(
      <Link to="/cardpage/postcard/0">
        <button className="navbarMenu" onClick={cardNavget}>
          스토리 카드
        </button>
      </Link>
    );
  }

  return (
    <div className="flex navbar">
      <div className="float-left">
        <Link to="/">
          <button className="navbarMenu text-myColors-primary font-bold">LOGO</button>
        </Link>
      </div>
      <div className="float-left">{navElement}</div>
      <div className="float-left">
        <Link to="./treatment">
          <button className="navbarMenu">스토리 전개 분석</button>
        </Link>
      </div>
      <div className="flex-1" />
      <div className="float-right">
        <NavItem />
      </div>
    </div>
  );
};

export default Navbar;
