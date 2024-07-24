import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Background({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(/backGround.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
      <ToastContainer />
    </div>
  );
}

export default Background;
