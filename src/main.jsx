import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageOne from "./pages/PageOne.jsx";
import Home from "./pages/Home.jsx";
import PageTwo from "./pages/PageTwo.jsx";
import PageThree from "./pages/PageThree.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <h1>THIS IS THE HOMEPAGE</h1>,
      },
      {
        path: "/one",
        element: <PageOne />,
      },
      {
        path: "/two",
        element: <PageTwo />,
      },
      {
        path: "/three",
        element: <PageThree />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
