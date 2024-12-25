import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import TermsAndCondition from "./pages/TermsAndCondition.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Cookis from "./pages/Cookies.jsx";
import Help from "./pages/Help.jsx";
import Faqs from "./pages/Faqs.jsx";
import Volenture from "./pages/Volenture.jsx";
import Team from "./pages/Team.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> Move Navbar outside of Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/terms-conditions" element={<TermsAndCondition />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/cookies" element={<Cookis />} />
        <Route exact path="/helps" element={<Help />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/volenture" element={<Volenture />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/what-we-do" element={<WhatWeDo />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
      {/* <Footer />
      <BackToTop /> */}
    </BrowserRouter>
  );
}
