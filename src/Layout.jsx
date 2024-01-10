import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/home/Home";
import Protected from "./component/protected";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected><Home /></Protected>} />
      </Routes>
    </>
  );
};

export default Layout;
