import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Soda from "./components/Soda.jsx";
import Chips from "./components/Chips.jsx";
import FreshSardines from "./components/FreshSardines.jsx";
import VendingMachine from "./components/VendingMachine.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <VendingMachine />,
      },
      {
        path: "/soda",
        element: <Soda />,
      },
      {
        path: "/chips",
        element: <Chips />,
      },
      {
        path: "/freshSardines",
        element: <FreshSardines />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
