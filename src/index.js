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
  {
    path: "*",
    element: (
      <Background>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
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
