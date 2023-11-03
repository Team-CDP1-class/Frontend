import { Outlet, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import PostTreatmentPage from "./postTreatmentPage";
import ResultPage from "./resultPage";

function Layout() {
  return (
    <div className="flex">
      <div className="min-h-full flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
}

const TreatmentPage = () => {
  return (
    <Routes>
      {/* 사이드 바 */}
      <Route path="/" element={<Layout />}>
        {/* route 중첩 */}
        <Route index element={<PostTreatmentPage />} />
        <Route path="/posttreatment" element={<PostTreatmentPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};

export default TreatmentPage;
