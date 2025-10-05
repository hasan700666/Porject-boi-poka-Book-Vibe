import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Error from "../Components/error/Error";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
