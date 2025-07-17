import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PatientSidebar from "../components/patient/PatientSidebar";
import Profile from "../Components/patient/Profile";
import VideoCall from "../Components/patient/VideoCall";
import Billing from "../Components/patient/Billing.jsx";
import MedicalHist from "../Components/patient/MedicalHist";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "../Components/patient/Dashboard.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Components/patient/Dashboard.css";


function PatientRoutes() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Sidebar Toggle Button */}
        <button
          className="btn btn-dark d-md-none position-fixed top-0 start-0 m-2"
          style={{ width: "auto", padding: "0.5rem", zIndex: 1050 }}
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        {/* Sidebar */}
        <nav
          className={`col-md-3 col-lg-2 bg-dark text-white sidebar p-3 d-flex flex-column position-fixed h-100 
            ${isSidebarOpen ? "d-block" : "d-none d-md-flex"}`}
          style={{ transition: "0.3s" }}
        >
          {/* Close Button */}
          <button
            className="btn btn-light d-md-none align-self-end mb-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          <Dashboard />
        </nav>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 p-4 d-flex flex-column flex-grow-1 offset-md-3 offset-lg-2">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/videoCall" element={<VideoCall />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/medicalHist" element={<MedicalHist />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default PatientRoutes;
