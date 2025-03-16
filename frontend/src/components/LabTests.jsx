import React, { useState } from "react";
import DoctorProfile from "./DoctorProfile";
import DoctorPhoto from './../assets/doctor.jpg'

const LabTests = () => {
  const [patientId, setPatientId] = useState("");
  const [testType, setTestType] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult({
      doctor: "Dr. Emily Brown",
      date: "12th Oct 2023",
      patientId,
      testType,
      description,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      {/* Upload Section */}
      <div className="bg-gray-500 text-white p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
        {/* Input Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">Upload For Lab Tests</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter the Patient's ID"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="p-3 rounded-md text-gray-900 bg-gray-100"
              required
            />

            <select
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              className="p-3 rounded-md text-gray-900 bg-gray-100"
              required
            >
              <option value="">Test Type</option>
              <option value="Blood Test">Blood Test</option>
              <option value="X-Ray">X-Ray</option>
              <option value="MRI">MRI</option>
            </select>

            <textarea
              placeholder="Description of the Test"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 rounded-md text-gray-900 bg-gray-100 mb-6"
              required
            />

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 hidden md:block">
          <img
            src={DoctorPhoto} // Replace with actual image URL
            alt="Doctors working"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Lab Test Results Section */}
      {result && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Lab Test Results
            <span className="text-green-500">🧑‍⚕️</span>
          </h3>
          <p className="text-gray-700 mt-2">Patient ID: {result.patientId}</p>
          <p className="text-gray-700">Test Type: {result.testType}</p>
          <p className="text-gray-700">Description: {result.description}</p>
          <hr className="my-4" />
          <p className="text-gray-600 font-semibold">Dr. {result.doctor}</p>
          <p className="text-gray-500">{result.date}</p>
        </div>
      )}
    </div>
  );
};

export default LabTests;
