import React from "react";
import Home from "./container/Home";
import About from "./container/About";
export default [
  { path: "/", component: Home, exact: true },
  {
    path: "/about",
    component: About,
    loadData: About.loadData,
    exact: true,
  },
];
