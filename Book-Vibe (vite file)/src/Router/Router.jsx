import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Error from "../Components/error/Error";
import Home from "../pages/Home";
import ShowOneBook from "../Components/main/ShowOneBook";
import Listbook from "../Components/main/Listbook";
import PageToRead from "../Components/main/PageToRead";

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
      {
        path: "about/book/:id",
        loader: () => fetch("../../public/booksData.json"),
        Component: ShowOneBook,
      },
      {
        path: "list-book",
        Component: Listbook,
      },
      {
        path: "pages-to-read",
        Component: PageToRead,
      },
    ],
  },
]);
