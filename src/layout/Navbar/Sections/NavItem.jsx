import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunction";

const routes = [
  { to: "/login", name: "로그인", auth: false },
  { to: "/register", name: "회원가입", auth: false },
  { to: "/", name: "로그아웃", auth: true },
];

/* eslint-disable react/prop-types */
const NavItem = () => {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/login");
    });
  };

  return (
    <ul className={`text-md justify-center w-full flex `}>
      {routes.map(({ to, name, auth }) => {
        if (isAuth !== auth) return null;

        if (name === "로그아웃") {
          return (
            <li key={name} className="navbarMenu float-right">
              <Link onClick={handleLogout}>{name}</Link>
            </li>
          );
        } else {
          return (
            <li key={name} className="navbarMenu float-right">
              <Link to={to}>{name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NavItem;
