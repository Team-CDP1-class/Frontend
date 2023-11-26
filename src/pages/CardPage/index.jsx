import { Outlet, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SideBar from "./sidebar";
import PostCardPage from "./postCardPage";
import ResultPage from "./resultPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authUser, getStoryCard, postStoryCard } from "../../store/thunkFunction";

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
  const dispatch = useDispatch();
  const storyCard = useSelector((state) => state.storyCard);
  const { pathname } = useLocation();

  // useEffect(() => {
  //   dispatch(getStoryCard());
  // }, [pathname]);

  return (
    <Routes>
      {/* 사이드 바 */}
      <Route path="/" element={<Layout />}>
        {/* route 중첩 */}
        {/* <Route index element={<MainPage />} /> */}
        <Route path="/postcard" element={<MainPage />} />
        <Route path="/postcard/:postId" element={<PostCardPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};

export default CardPage;
