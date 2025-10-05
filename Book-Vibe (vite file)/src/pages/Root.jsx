import React from "react";
import Header from "../Components/header/Header";
import { Outlet } from "react-router";
import Footer from "../Components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
