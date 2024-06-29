import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "@assets/bootstrap-datetimepicker.min.css";
import "@assets/bootstrap.min.css";
import "@assets/feather.css";
import "@assets/owl.theme.default.min.css";
import "@assets/slick.css";
import "@assets/style.css";
// js
import "@assets_js/jquery-3.6.3.min.js";
import "@assets_js/bootstrap.bundle.min.js"
import "@assets_js/backToTop.js"
import "@assets_js/feather.min.js"
import "@assets_js/owl.carousel.min.js"
import "@assets_js/script.js"

import { Home } from '@components/Home'
import { Error404 } from '@components/Pages/404Error';
import { Contact } from '@components/Pages/Contact';
import { About } from '@components/Pages/About';
import { TwoWheeler } from '@components/Pages/TwoWheeler';
import { FourDetails, ThreeDetails,TwoDetails} from '@Vehicle';
import Dashboard from './Admin/Pages/Dashboard';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/twoWheeler" element={<TwoWheeler />} />
          <Route path="/twodetails" element={<TwoDetails />} />
          <Route path="/threedetails" element={<ThreeDetails />} />
          <Route path="/fourdetails" element={<FourDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
