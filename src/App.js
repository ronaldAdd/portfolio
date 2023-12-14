import logo from "./logo.svg";

import { Route, Routes } from "react-router-dom";
import UsersRoute from "./router/UsersRoute";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <Routes>
      <>
        <Route
          path="/"
          element={<UsersRoute data={{ pathname: "route user signin" }} />}
        />
      </>
    </Routes>
  );
}

export default App;
