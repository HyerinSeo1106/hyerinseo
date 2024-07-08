import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="contents-area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
