import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const DoctorSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-700 text-white ${
        isOpen ? "w-64" : "w-32"
      } h-screen transition-all duration-300 flex flex-col`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className={`text-xl font-bold ${!isOpen && "hidden"}`}>
          Doctor Dashboard
        </h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <ul className="mt-4">
        {[
          { path: "/doctor/profile", name: "Profile" },
          { path: "/doctor/appointments", name: "Appointments" },
          { path: "/doctor/lab-tests", name: "Lab Tests" },
          { path: "/doctor/leave-requests", name: "Leave Requests" },
          { path: "/doctor/messages", name: "Messages" },
        ].map((item) => (
          <li key={item.path} className="p-4 hover:bg-gray-500">
            <NavLink
              to={item.path}
              className="w-full block"
              activeClassName="bg-blue-600"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorSidebar;
