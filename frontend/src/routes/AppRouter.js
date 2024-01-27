import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Route, Routes } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { CartProvider } from "../Component/ContextReducer";
import MyOrder from "../pages/MyOder";

// import "../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";

const AppRouter = () => {
  return (
    <>
      {/* <CartProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myOrder" element={<MyOrder />} />
      </Routes>
      {/* </CartProvider> */}
    </>
  );
};

export default AppRouter;
