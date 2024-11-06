import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const Root = () => {
  return (
    <HelmetProvider>
      <div>     
      <ToastContainer></ToastContainer>
      <div className="mx-8 pt-8">
      <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </HelmetProvider>
  );
};

export default Root;
