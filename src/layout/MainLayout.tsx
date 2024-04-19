import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
