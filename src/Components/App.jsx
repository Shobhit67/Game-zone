import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

import LudoGame from "./LudoGame";       


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route path="/LudoGame" element={<LudoGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;