import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./components/Background";
import List from "./components/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Background>
        <App />
      </Background>
    ),
  },
  {
    path: "/list",
    element: (
      <Background>
        <List />
      </Background>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
