import React from 'react';
import Login from './Login';
import Welcome from './Welcome'; // Import the Welcome page
import './Login.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorRoutes from "./routes/DoctorRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import PatientRoutes from "./routes/PatientRoutes";
import NotFound from "./pages/PageNotFound";
import "./Login.css";

function App() {
  return (
    <>
    {/* <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router> */}

    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Doctor Routes */}
        <Route path="/doctor/*" element={<DoctorRoutes />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Patient Routes */}
        <Route path="/patient/*" element={<PatientRoutes />} />

        {/* 404 - Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
