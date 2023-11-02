import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = (isAuth) => {
  return isAuth.isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
