import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Admin-Sidebar";
import React from "react";
import Overview from "./pages/Overview";
import CommunicationTools from "./pages/CommunicationTools";
import DoctorManagement from "./pages/DoctorManagement";
import StaffManagement from "./pages/StaffManagement";
import TrainingCertification from "./pages/TrainingCertification";
import PayrollCompensation from "./pages/PayrollCompensation";
import DocumentManagement from "./pages/DocumentManagement";
import LeaveManagement from "./pages/LeaveManagement";
import Feedback from "./pages/Feedback";
import Performance from "./pages/Performance";
import Settings from "./pages/Settings";

const Admin_DashBoard = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          
          <div className="p-4 flex-1 overflow-auto">
            <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/communication-tools" element={<CommunicationTools />} />
            <Route path="/doctor-management" element={<DoctorManagement />} />
            <Route path="/staff-management" element={<StaffManagement />} />
            <Route path="/training-certification" element={<TrainingCertification />} />
            <Route path="/payroll-compensation" element={<PayrollCompensation />} />
            <Route path="/document-management" element={<DocumentManagement />} />
            <Route path="/leave-management" element={<LeaveManagement />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/settings" element={<Settings />} />
            {/* Redirect unknown routes to Overview */}
            <Route path="*" element={<Overview />} />
           </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Admin_DashBoard;
