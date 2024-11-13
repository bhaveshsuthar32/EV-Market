import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@assets/bootstrap-datetimepicker.min.css";
import "@assets/bootstrap.min.css";
import "@assets/feather.css";
import "@assets/owl.theme.default.min.css";
import "@assets/slick.css";
import "@assets/style.css";
// js
import "@assets_js/jquery-3.6.3.min.js";
import "@assets_js/bootstrap.bundle.min.js";
import "@assets_js/backToTop.js";
import "@assets_js/feather.min.js";
import "@assets_js/owl.carousel.min.js";
import "@assets_js/script.js";

import { Home } from "./pages/user/pages/home";
import AboutUs from "./pages/user/pages/about";




 function App() { 
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adout-us" element={<AboutUs />} />
          
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
