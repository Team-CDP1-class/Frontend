import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";

const Navbar = () => {
  return (
    <div className="flex navbar">
      <div>
        <Link to="/">
          <button className="navbarMenu float-left text-myColors-primary font-bold">LOGO</button>
        </Link>
      </div>
      <div>
        <Link to="./cardpage">
          <button className="navbarMenu float-left">스토리 카드</button>
        </Link>
      </div>
      <div>
        <Link to="./treatment">
          <button className="navbarMenu float-left">스토리 전개 분석</button>
        </Link>
      </div>
      <div>
        <NavItem />
      </div>
    </div>
  );
};

export default Navbar;
