import React from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./Sections/NavItem";
import { useDispatch, useSelector } from "react-redux";

function cardNav(len) {
  if(len == 0) {
    return (
    <Link to="/cardpage/postcard">
          <button className="navbarMenu">스토리 카드</button>
    </Link>
    );
  }
  else {
    return (
      <Link to="/cardpage/postcard/0">
            <button className="navbarMenu">스토리 카드</button>
      </Link>
      );
  }


}

const Navbar = () => {
  const storyCard = useSelector((state) => state.cardStory.storyCardData);

  return (
    <div className="flex navbar">
      <div className="float-left">
        <Link to="/">
          <button className="navbarMenu text-myColors-primary font-bold">LOGO</button>
        </Link>
      </div>
      <div className="float-left">
        {cardNav(storyCard.length)}
      </div>
      <div className="float-left">
        <Link to="./treatment">
          <button className="navbarMenu">스토리 전개 분석</button>
        </Link>
      </div>
      <div className="flex-1"/>
      <div className="float-right">
        <NavItem />
      </div>
    </div>
  );
};

export default Navbar;
