import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";

const Navbar = () => {
  return (
    <div className="flex navbar">
      <div className="float-left">
        <Link to="/">
          <button className="navbarMenu text-myColors-primary font-bold">LOGO</button>
        </Link>
      </div>
      <div className="float-left">
        <Link to="./cardpage/postcard">
          <button className="navbarMenu">스토리 카드</button>
        </Link>
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
