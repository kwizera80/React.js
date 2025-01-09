import React from 'react'
import Home from './pages/home'
import Homelayout from './layouts/homelayout'
import Notfound from './components/not-found'
import DashLayout from './layouts/dashLayout'
import About from './pages/about'
import Dashboard from './pages/Dashboard'
import Profile from './pages/profile'
import Patient from './pages/patient'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Routes>
  
  {/* home routes */}
      <Route path="/" element={<Homelayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Route>
 {/* dashboard routes */}
      <Route path="/dashboard" element={<DashLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App