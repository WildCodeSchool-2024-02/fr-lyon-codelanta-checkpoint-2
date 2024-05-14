import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import CupcakeList from "./pages/CupcakeList";
import CupcakeDetail from "./pages/CupcakeDetail";

function fetchCupcakeList() {
  return fetch("http://localhost:3310/api/cupcakes").then((response) =>
    response.json()
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        loader: () => fetchCupcakeList(),
      },
      {
        path: "/cupcakes/:id",
        element: <CupcakeDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
