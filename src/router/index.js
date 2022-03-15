import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
import SignUp from "pages/public/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp />} />

        {/* 404 page route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
