import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthRoutes = (isAuth) => {
  return isAuth.isAuth ? <Navigate to={"/"} /> : <Outlet />;
};

export default NotAuthRoutes;
