import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientSidebar from "../components/patient/PatientSidebar";
import Profile from "../components/patient/Profile";
import VideoCall from "../components/patient/VideoCall";
import Billing from "../components/patient/Billing";
import MedicalHist from "../components/patient/MedicalHist";
import DigitalPrescription from "../components/patient/Digital_pres";

const PatientRoutes = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <PatientSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/videoCall" element={<VideoCall />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/medicalHist" element={<MedicalHist />} />
          <Route path="/prescription" element={<DigitalPrescription />} />
        </Routes>
      </div>
    </div>
  );
};

export default PatientRoutes;
