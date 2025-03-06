import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/login';
import Signup from './pages/signup';
import Bookings from './pages/booking';
import Contact from './pages/contact';
import { useEffect } from "react";

import './App.css';


export default function App() {
  



  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path='/contact' element={<Contact/>} />
          
          

        </Routes>
      </div>
    </Router>
  );
}
