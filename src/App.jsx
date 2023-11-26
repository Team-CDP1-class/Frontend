import { Outlet, Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ElementPage from "./pages/ElementPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CardPage from "./pages/CardPage";
import TreatmentPage from "./pages/TreatmentPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authUser } from "./store/thunkFunction";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotAuthRoutes from "./components/NotAuthPoutes";

function Layout() {
  return (
    <div className="h-screen overflow-auto">
      <ToastContainer position="bottom-right" theme="light" pauseOnHover autoClose={1500} />
      <Navbar />
      <div className="overflow-auto min-h-full mt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user?.isAuth);
  const { pathname } = useLocation();
  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/test/*" element={<TreatmentPage />} />
        {/* 로그인한 사람만 갈 수 있는 경로 */}
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/element" element={<ElementPage />} />
          <Route path="/cardpage/*" element={<CardPage />} />
          <Route path="/treatment" element={<TreatmentPage />} />
        </Route>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        {/* 로그인한 사람은 갈 수 없는 경로 */}
        <Route element={<NotAuthRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
