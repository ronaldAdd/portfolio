import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Headers from "../components/Headers";
import UsersRoute from "./UsersRoute";
import routes from "./config";
function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<UsersRoute data={{ pathname: "route user signin" }} />}
      />
    </Routes>
  );
}

export default Router;
