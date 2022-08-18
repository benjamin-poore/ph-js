import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./public/home/Home";
import Vision from "./public/components/Vision";
import Beliefs from "./public/components/Beliefs";
import Fellowship from "./public/components/Fellowship";
import Pastor from "./public/components/Pastor";
import LocationPage from "./public/components/LocationPage";
import ContactPage from "./public/components/ContactPage";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../src/services/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/vision-method" element={<Vision />} />
          <Route path="/our-fellowship" element={<Fellowship />} />
          <Route path="/our-pastor" element={<Pastor />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="expenses" element={<App />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
