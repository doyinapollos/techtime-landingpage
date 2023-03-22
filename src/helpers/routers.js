import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NonAuthRoutes } from "./url";

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;