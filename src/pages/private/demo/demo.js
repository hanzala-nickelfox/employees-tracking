import React from "react";
import { Outlet } from "react-router-dom";

function Demo() {
  return (
    <>
      <h1>Demo======================</h1>
      <Outlet />
    </>
  );
}

export default Demo;
