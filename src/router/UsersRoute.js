import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Headers";
import SimpleThreeColumns from "../components/SimpleThreeColumns";

function UsersRoute(props) {
  console.log("UsersRoute", props);

  return (
    <>
      <SimpleThreeColumns />
    </>
  );
}

export default UsersRoute;
