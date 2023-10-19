import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import { Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;