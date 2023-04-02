import React from "react";
import Navbar from "./components/Navbar";
import Forms from "./pages/Forms";

import ContactUs from "./pages/ContactUs";
import Tour from "./pages/Tour";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Events from "./pages/Events";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
