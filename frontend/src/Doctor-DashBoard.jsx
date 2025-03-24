import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Appointments from "./components/Appointments";
import LabTests from "./components/LabTests";
import LeaveRequest from "./components/LeaveRequest";
import Messages from "./components/Messages";
import DoctorProfile from "./components/DoctorProfile";

const DoctorDashBoard = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-4 flex-1 overflow-auto">
            <Routes>
              <Route path="/profile" element={<DoctorProfile />} />
              <Route path="/" element={<DoctorProfile />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/lab-tests" element={<LabTests />} />
              <Route path="/leave-requests" element={<LeaveRequest />} />
              <Route path="/messages" element={<Messages />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default DoctorDashBoard;
