import { Outlet, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ElementPage from "./pages/ElementPage";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CardPage from "./pages/CardPage";

function Layout() {
  return (
    <div className="h-screen overflow-auto">
      <Navbar />
      <div className="overflow-auto min-h-full mt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        <Route path="/element" element={<ElementPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cardpage/*" element={<CardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
