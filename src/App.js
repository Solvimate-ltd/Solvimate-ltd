import React from "react";
import './index.css'
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Carrer from "./Routes/Career"
import Services from "./Routes/Services"
import Overview from "./Routes/Overview"
import OurTeam from "./Routes/OurTeam";
import { Route, Routes } from "react-router-dom";
import K12page from "./Routes/K12page";
import CorporateLearning from "./Routes/CorporateLearning";
import SeoBasedContent from "./Routes/SeoBasedContent";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Overview" element={<Overview/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/OurTeam" element={<OurTeam/>} />
      <Route path="/Career" element={<Carrer/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/K12page" element={<K12page/>} />
      <Route path="/CorporateLearning" element={<CorporateLearning/>} />
      <Route path="/SeoBasedContent" element={<SeoBasedContent/>} />



      
    </Routes>

    
    </>
  );
}

export default App;
