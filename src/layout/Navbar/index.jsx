import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="navbarMenu float-left text-myColors-primary font-bold">LOGO</button>
      <button className="navbarMenu float-left">스토리 카드</button>
      <button className="navbarMenu float-left">스토리 전개 분석</button>
      <button className="navbarMenu float-right">
        <a href="/login" className="font-medium ">
          회원가입/로그인
        </a>
      </button>
    </div>
  );
};

export default Navbar;
