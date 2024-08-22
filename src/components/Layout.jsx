import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <div className="bg-[#FFF6F2]">
        <div className="container m-auto px-2 xl:px-10 pt-3">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
