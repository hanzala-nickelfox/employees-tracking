import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "pages/Error404";
import SignUp from "pages/public/signup";
// import Dashboard from "pages/private/dashboard";
import RoutingList from "./routes/index";
// import { Navigate } from "react-router-dom";

const Router = () => {
  const RoutingListData = [
    {
      path: "/",
      element: <SignUp />
    }
  ];
  console.log(RoutingListData, "checker============");

  return (
    <BrowserRouter>
      <Routes>
        <RoutingList RoutingListData={RoutingListData} />
        {/* Link redirect to /signup */}
        {/* <Route path="/" element={<Navigate replace to="/signup" />} /> */}
        {/* Routes for public pages */}


        <Route exact path="/" element={<SignUp />} />
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        {/* 404 page route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
