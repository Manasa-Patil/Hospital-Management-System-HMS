import React, { useState } from "react";
import { FaTasks, FaCheck } from "react-icons/fa";
import Image from "./../assets/Person.jpg";
const LeaveManagement = () => {
  const [filter, setFilter] = useState("All");
  const [leaves, setLeaves] = useState([
    { id: "001", name: "John Doe", department: "Emergency Department", date: "03-03-2025", reason: "Excessive Job related stress", status: "Pending", image: "https://via.placeholder.com/50" },
    { id: "002", name: "Jane Smith", department: "Surgery Department", date: "01-02-2025", reason: "To attend my friend Marriage", status: "Pending", image: "https://via.placeholder.com/50" },
    { id: "003", name: "Michael Johnson", department: "ICU", date: "14-12-2024", reason: "Maternity", status: "Approved", image: "https://via.placeholder.com/50" },
    { id: "004", name: "Emily Brown", department: "Pediatrics Department", date: "21-01-2025", reason: "Personal illness", status: "Pending", image: "https://via.placeholder.com/50" },
    { id: "005", name: "David Wilson", department: "Neurology Department", date: "20-01-2025", reason: "Vacation", status: "Pending", image: "https://via.placeholder.com/50" },
    { id: "006", name: "Sarah Miller", department: "Radiology Department", date: "02-02-2025", reason: "Conference and Training", status: "Approved", image: "https://via.placeholder.com/50" },
    { id: "007", name: "Kevin Lee", department: "Pharmacy Department", date: "06-02-2025", reason: "Family Emergencies", status: "Approved", image: "https://via.placeholder.com/50" },
  ]);

  // Function to update leave status
  const updateStatus = (id, newStatus) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status: newStatus } : leave
    );
    setLeaves(updatedLeaves);
  };

  const filteredLeaves = filter === "All" ? leaves : leaves.filter((leave) => leave.status === filter);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header with Filters */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Leave Management</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-md border ${filter === "Pending" ? "bg-yellow-500 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("Pending")}
        >
          <FaTasks />
          Pending Leaves
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-md border ${filter === "Approved" ? "bg-green-500 text-white" : "bg-gray-100"}`}
          onClick={() => setFilter("Approved")}
        >
          <FaCheck />
          Approved
        </button>
      </div>

      {/* Leave Requests Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Avatar</th>
              <th className="p-3">Staff Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Date</th>
              <th className="p-3">Reason</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.map((leave) => (
              <tr key={leave.id} className="border-t">
                <td className="p-3">{leave.id}</td>
                <td className="p-3">
                  <img src={Image} alt={leave.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="p-3">{leave.name}</td>
                <td className="p-3">{leave.department}</td>
                <td className="p-3">{leave.date}</td>
                <td className="p-3">{leave.reason}</td>
                <td className="p-3">
                  <select
                    value={leave.status}
                    onChange={(e) => updateStatus(leave.id, e.target.value)}
                    className={`px-3 py-1 rounded-md text-white ${
                      leave.status === "Approved" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
