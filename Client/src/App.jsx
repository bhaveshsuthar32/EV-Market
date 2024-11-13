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
import { AboutUs } from "./pages/user/pages/about";
import {Contact} from "./pages/user/pages/contact_us"
import { BikeData } from "./pages/user/pages/two-wheeler/bike";
import { ScooterData } from "./pages/user/pages/two-wheeler/scooter";
import { CarData } from "./pages/user/pages/four-wheeler/car";
import { BicycleData } from "./pages/user/pages/three-wheeler/bicycle";
import TwoDetails from "./pages/user/pages/wheeler-details/two-wheeler";
import ThreeDetails from "./pages/user/pages/wheeler-details/three-wheeler";
import FourDetails from "./pages/user/pages/wheeler-details/four-wheeler";



 function App() { 
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adout" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/bike" element={<BikeData />} />
          <Route path="/scooter" element={<ScooterData />} />
          <Route path="/car" element={<CarData />} />
          <Route path="/bicycle" element={<BicycleData />} />
          <Route path="/two-details" element={<TwoDetails />} />
          <Route path="/three-details" element={<ThreeDetails />} />
          <Route path="/four-details" element={<FourDetails />} />
          
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
