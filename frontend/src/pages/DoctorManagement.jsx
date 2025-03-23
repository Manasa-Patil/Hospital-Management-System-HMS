import React, { useState } from "react";
import DoctorImage from "./../assets/doctor.jpg";
const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Alice Smith",
      status: "Available",
      appointments: 20,
      image: "https://via.placeholder.com/50", // Replace with actual images
    },
    {
      id: 2,
      name: "Dr. Bob Johnson",
      status: "On Leave",
      appointments: 15,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Dr. Charlie Brown",
      status: "Available",
      appointments: 17,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Dr. Diana Prince",
      status: "Unavailable",
      appointments: 13,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Dr. Edward Wong",
      status: "Available",
      appointments: 30,
      image: "https://via.placeholder.com/50",
    },
  ]);

  const [search, setSearch] = useState("");

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setDoctors(
      doctors.map((doctor) =>
        doctor.id === id ? { ...doctor, status: newStatus } : doctor
      )
    );
  };

  return (
    <div className="p-6">
      {/* Doctor List Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Doctor List</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="🔍 Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-md"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
            Add New Doctor
          </button>
        </div>
      </div>

      {/* Doctor Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Doctor Photo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Number of appointments</th>
              <th className="p-3">Modify</th>
            </tr>
          </thead>
          <tbody>
            {doctors
              .filter((doctor) =>
                doctor.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((doctor) => (
                <tr key={doctor.id} className="border-t">
                  <td className="p-3">
                    <img
                      src={DoctorImage}
                      alt={doctor.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="p-3">{doctor.name}</td>
                  <td className="p-3">
                    <select
                      value={doctor.status}
                      onChange={(e) => handleStatusChange(doctor.id, e.target.value)}
                      className="border p-2 rounded-md"
                    >
                      <option value="Available">Available</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      value={doctor.appointments}
                      readOnly
                      className="border p-2 w-16 rounded-md"
                    />
                  </td>
                  <td className="p-3">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Appointment Management Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Appointments Management
        </h3>
        <form className="bg-white shadow-lg rounded-lg p-6 max-w-md">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Patient ID"
              className="p-3 border rounded-md text-gray-900"
              required
            />
            <input
              type="text"
              placeholder="Doctor ID"
              className="p-3 border rounded-md text-gray-900"
              required
            />
            <input
              type="text"
              placeholder="Timing"
              className="p-3 border rounded-md text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorManagement;
