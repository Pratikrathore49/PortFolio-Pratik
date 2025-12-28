import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    
    <div >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
  
  );
};

export default MainLayout;
