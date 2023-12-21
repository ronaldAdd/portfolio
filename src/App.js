import logo from "./logo.svg";

import { Route, Routes } from "react-router-dom";
import UsersRoute from "./router/UsersRoute";
import EmployementHistory from "./router/EmployementHistory";
import React, { useEffect, useState } from "react";
import profiles from "./profile/detail.json";

function App() {
  return (
    <Routes>
      <>
        <Route path="/" element={<UsersRoute data={profiles} />} />
      </>
    </Routes>
  );
}

export default App;
