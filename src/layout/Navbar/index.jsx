import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="navbarMenu float-left text-myColors-primary font-bold">LOGO</button>
      </Link>
      <Link to="./cardpage">
        <button className="navbarMenu float-left">스토리 카드</button>
      </Link>
      <Link to="./treatment">
        <button className="navbarMenu float-left">스토리 전개 분석</button>
      </Link>
      <button className="navbarMenu float-right">
        <a href="/login" className="font-medium ">
          회원가입/로그인
        </a>
      </button>
    </div>
  );
};

export default Navbar;
