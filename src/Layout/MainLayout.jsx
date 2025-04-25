import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      
      <Navbar></Navbar>
      <div className="container mx-auto min-h-[calc(100vh-344px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
     
    </>
  );
};

export default MainLayout;
