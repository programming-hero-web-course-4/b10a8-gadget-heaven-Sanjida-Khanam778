import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Home/Banner";

const Root = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <div>{pathname === "/" ? <div className="m-8"><Banner></Banner></div>: <Navbar></Navbar>}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
