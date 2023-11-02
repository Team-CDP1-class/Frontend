import { Outlet, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SideBar from "./sidebar";
import PostCardPage from "./postCardPage";
import ResultPage from "./resultPage";

function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="min-h-full flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
}

const CardPage = () => {
  return (
    <Routes>
      {/* 사이드 바 */}
      <Route path="/" element={<Layout />}>
        {/* route 중첩 */}
        <Route index element={<MainPage />} />
        <Route path="/postcard" element={<PostCardPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};

export default CardPage;
