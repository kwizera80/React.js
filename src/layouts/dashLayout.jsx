import React from "react";
import { Outlet } from "react-router-dom";
const DashLayout = () => {
  return (
    <div>
      <h1>welcome to dashboard</h1>
      <Outlet />
    </div>
  );
};

export default DashLayout;
