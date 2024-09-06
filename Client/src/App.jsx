import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "@assets/bootstrap-datetimepicker.min.css";
// import "@assets/bootstrap.min.css";
// import "@assets/feather.css";
// import "@assets/owl.theme.default.min.css";
// import "@assets/slick.css";
// import "@assets/style.css";
// // js
// import "@assets_js/jquery-3.6.3.min.js";
// import "@assets_js/bootstrap.bundle.min.js";
// import "@assets_js/backToTop.js";
// import "@assets_js/feather.min.js";
// import "@assets_js/owl.carousel.min.js";
// import "@assets_js/script.js";

import { Home } from "@components/Home";
import { Error404 } from "@components/Pages/404Error";
import { Contact } from "@components/Pages/Contact";
import { About } from "@components/Pages/About";
import { BikeData } from "@components/Pages/TwoWheeler/Bike";
import { ScooterData } from "@components/Pages/TwoWheeler/Scooter";
import { CarData } from "@components/Pages/FourWheeler/Car";
import { BicycleData } from "@components/Pages/ThreeWheeler/Bicycle";

import { FourDetails, ThreeDetails, TwoDetails } from "@Vehicle";
import Dashboard from "./Admin/Pages/Dashboard";
import Profile from "./Admin/Pages/Profile";
import ABrand from "@Admin/Pages/ABrand";
import ADealer from "@Admin/Pages/ADealer";
import AEVSpares from "@Admin/Pages/AEVSpares";
import AEVStartups from "@Admin/Pages/AEVStartups";
import AFourWheeler from "@Admin/Pages/AFourWheeler";
import ANews from "@Admin/Pages/ANews";
import AThreeWheeler from "@Admin/Pages/AThreeWheeler";
import ATwoWheeler from "@Admin/Pages/ATwoWheeler";
import { Brand_Form } from "@Admin/Pages/ABrand/Brand_Form";
import { Dealer_Form } from "@Admin/Pages/ADealer/Dealer_Form";
import { EVSpares_Form } from "@Admin/Pages/AEVSpares/EVSpares_Form";
import { EVStartups_Form } from "@Admin/Pages/AEVStartups/EVStartups_Form";
import { FourWheeler_Form } from "@Admin/Pages/AFourWheeler/FourWheeler_Form";
import { News_Form } from "@Admin/Pages/ANews/News_Form";
import { ThreeWheeler_Form } from "@Admin/Pages/AThreeWheeler/ThreeWheeler_Form";
import { TwoWheeler_Form } from "@Admin/Pages/ATwoWheeler/TwoWheeler_Form";
import TwoColor from "@components/Pages/Details/TwoColor";
import ThreeColor from "@components/Pages/Details/ThreeColor";
import FourColor from "@components/Pages/Details/FourColor";
import Sign from "@Admin/Pages/Sign/sign";
import Login from "@Admin/Pages/Sign/login";


 function App() { 
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin  */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/sign" element={<Sign />} />
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/brand" element={<ABrand />} />
          <Route path="/dashboard/dealer" element={<ADealer />} />
          <Route path="/dashboard/evspares" element={<AEVSpares />} />
          <Route path="/dashboard/evstartups" element={<AEVStartups />} />
          <Route path="/dashboard/fourwheeler" element={<AFourWheeler />} />
          <Route path="/dashboard/news" element={<ANews />} />
          <Route path="/dashboard/threewheeler" element={<AThreeWheeler />} />
          <Route path="/dashboard/twowheeler" element={<ATwoWheeler />} />

          {/* form----------- */}
          <Route path="/dashboard/brand_form" element={<Brand_Form />} />
          <Route path="/dashboard/dealer_form" element={<Dealer_Form />} />
          <Route path="/dashboard/evspares_form" element={<EVSpares_Form />} />
        
          <Route
            path="/dashboard/evstartups_form"
            element={<EVStartups_Form />}
          />
          <Route
            path="/dashboard/fourwheeler_form"
            element={<FourWheeler_Form />}
          />
          <Route path="/dashboard/news_form" element={<News_Form />} />
          <Route
            path="/dashboard/threewheeler_form"
            element={<ThreeWheeler_Form />}
          />
          <Route
            path="/dashboard/twowheeler_form"
            element={<TwoWheeler_Form />}
          />

          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/twodetails" element={<TwoDetails />} />
          <Route path="/threedetails" element={<ThreeDetails />} />
          <Route path="/fourdetails" element={<FourDetails />} />
          {/* <Route path="/twowheeler" element={<TwoWheeler />} /> */}
          <Route path="/bikeData" element={<BikeData />} />
          <Route path="/scooterData" element={<ScooterData />} />
          <Route path="/bicycleData" element={<BicycleData />} />
          <Route path="/carData" element={<CarData />} />

          <Route path="/twocolor" element={<TwoColor />} />
          <Route path="/threecolor" element={<ThreeColor />} />
          <Route path="/fourcolor" element={<FourColor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
