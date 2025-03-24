import React, { useState } from "react";

const LeaveRequest = () => {
  const [description, setDescription] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [status, setStatus] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Approved"); // You can modify this logic based on real approval process
  };

  return (
    <div className="p-6">
      {/* Leave Request Form and Status Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Apply for Leave Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Apply For Leave <span className="text-green-500">🧑‍⚕️</span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 border rounded-md text-gray-900"
              required
            />

            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="p-3 border rounded-md text-gray-900"
              required
            >
              <option value="">Type of Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Emergency Leave">Emergency Leave</option>
            </select>

            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Status Section */}
        <div className="flex-1 text-center">
          <h3 className="text-xl font-bold text-gray-800">Status</h3>
          {status ? (
            <p className="mt-4 text-lg font-semibold text-green-600">
              ⭕ {status}
            </p>
          ) : (
            <p className="mt-4 text-lg text-gray-500">No leave request submitted</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
