import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles

// pages
//import RegisterPage from "views/examples/RegisterPage.js";
//import ServicesPage from "views/examples/ServicesPage";
//import ProfilePageRiqui from "views/examples/ProfilePageRiqui";
import LandingPage2 from "views/final/LandingPage2.jsx";
import { LanguageProvider } from "context/LanguageContext.jsx";
import HomeSplitView from "./views/Home/HomeSplitView";
import Automation from "./views/Automation/Automation";
//import './App.css'

function App() {

  return (
    <>
      <LanguageProvider>
          <BrowserRouter>
            <Routes>
              {/*<Route path="/index" element={<Index />} />
              <Route path="/nucleo-icons" element={<NucleoIcons />} />
              <Route path="/landing-page2" element={<LandingPage2 />} />
              <Route path="/landing-page-example" element={<LandingPageExample />} />*/}
              <Route path="/consulting" element={<LandingPage2 />} />
              <Route path="/" element={<HomeSplitView />} />
              <Route path="/automation" element={<Automation />} />
             {/* <Route path="/profile-page-nico" element={<ProfilePageRiqui />} />*/}
             {/* <Route path="/register-page" element={<RegisterPage />} />*/}
            {/*  <Route path="/services-page" element={<ServicesPage />} />*/}
              <Route path="*" element={<Navigate to="/" replace />} />
             {/* <Route path="/landing-page-in" element={<InglishLandingPage />} />
              <Route path="/services-page-in" element={<InglishServicesPage />} />
              <Route path="/profile-page-nico-in" element={<InglishProfilePageRiqui />} />
              <Route path="/contact-in" element={<InglishContact />} />*/}
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
    </>
  )
}

export default App