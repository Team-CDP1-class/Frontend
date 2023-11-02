import { Outlet, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SideBar from "./sidebar";
import PostCardPage from "./postCardPage";
import ResultPage from "./resultPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authUser } from "./store/thunkFunctions";

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
  const isAuth = useSelector((state) => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]);

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]);
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
