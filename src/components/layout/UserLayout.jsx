import React, { useRef } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const UserLayout = () => {
  
  return (
    <div>
      <Header  />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
