import React from "react";
import { Link, useLocation } from "react-router-dom";
import videoCamera from "../../assets/video-camera.png";
import billIcon from "../../assets/billing-machine.png";
import checkupIcon from "../../assets/medical-checkup.png";

const navItems = [
  { path: "/patient", label: "Profile", icon: "fas fa-user" },
  { path: "/patient/videoCall", label: "Video Call", img: videoCamera },
  { path: "/patient/billing", label: "Billing & Payments", img: billIcon },
  { path: "/patient/medicalHist", label: "Medical History", img: checkupIcon },
  { path: "/patient/prescription", label: "Digital Prescription", img: checkupIcon },
];

const PatientSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 shadow-lg">
      {/* Logo */}
      <div className="text-center text-xl font-bold py-4 border-b border-gray-700">
        Patient Panel
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300
              ${location.pathname === item.path ? "bg-purple-700" : "hover:bg-gray-700"}`}
          >
            {item.img ? (
              <img src={item.img} alt={item.label} className="w-5 h-5" />
            ) : (
              <i className={`${item.icon} text-lg`}></i>
            )}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default PatientSidebar;
