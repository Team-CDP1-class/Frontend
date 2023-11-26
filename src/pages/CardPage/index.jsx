import { Outlet, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./mainPage";
import SideBar from "./sidebar";
import PostCardPage from "./postCardPage";
import ResultPage from "./resultPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
  const storyCard = useSelector((state) => state.cardStory.storyCardData);
  const { pathname } = useLocation();
  const [currentCard, setCurrent] = useState(storyCard);
  const params = useParams();

  // useEffect(() => {
  //   dispatch(getStoryCard());
  // }, [pathname]);

  useEffect(() => {
    if(params['*'] != "postcard") {
      setCurrent(storyCard[params['*'].split("/")[1]]);
    }
  }, [params, storyCard]);

  return (
    <Routes>
      {/* 사이드 바 */}
      <Route path="/" element={<Layout />}>
        {/* route 중첩 */}
        {/* <Route index element={<MainPage />} /> */}
        <Route path="/postcard" element={<MainPage />} />
        <Route path="/postcard/:postId" element={<PostCardPage storyCard={currentCard}/>} />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};

export default CardPage;