import { useState } from 'react'
import './App.css'
import { Home } from '@components/Home'
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
// import "@assets_js/select2.min.js"
// import "@assets_js/aos.js"
import "@assets_js/backToTop.js"
import "@assets_js/feather.min.js"
import "@assets_js/owl.carousel.min.js"
import "@assets_js/script.js"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
