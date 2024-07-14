import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/cupu-ml-university" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
