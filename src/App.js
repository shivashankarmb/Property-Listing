import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";


// Pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Buy from "./pages/Buy"; 
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Navbar stays on top of all pages */}
      <Navbar />

      {/* Routing to Home and Property Details */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
