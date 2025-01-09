import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Homelayout from "../layouts/homelayout";
import DashLayout from "../layouts/dashLayout";
import Dashboard from "../pages/Dashboard";
import About from "../components/about";
import Notfound from "../components/not-found";
import Profile from "../pages/profile";
import Finddoctor from "../pages/finddoctor";
import Services from "../pages/Services";
import Contact from "../pages/contact";
import Login from "../pages/login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<Homelayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Services />} />
          <Route path="doctor" element={<Finddoctor />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
