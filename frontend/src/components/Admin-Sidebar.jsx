import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gray-700 text-white ${isOpen ? "w-64" : "w-32"} h-screen transition-all duration-300 flex flex-col`}>
      <div className="flex justify-between items-center p-4">
        <h2 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Admin Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <ul className="mt-4">
        {[
          {path:"/", name:"Overview"},
            { path: "/communication-tools", name: "Communication Tools" },
          { path: "/doctor-management", name: "Doctor Management" },
          { path: "/staff-management", name: "Staff Management" },
          { path: "/training-certification", name: "Training & Certification" },
          { path: "/payroll-compensation", name: "Payroll & Compensation" },
          {path: "/document-management", name: "Document Management"},
          {path: "/leave-management", name: "Leave Management"  },
          {path: "/feedback", name: "Feedback"},
          {path: "/performance", name: "Performance"},
          {path: "/settings", name:"Settings"},
        ].map((item) => (
          <li key={item.path} className="p-4 hover:bg-gray-500">
            <NavLink to={item.path} className="w-full block" activeClassName="bg-blue-600">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

   
      
       


