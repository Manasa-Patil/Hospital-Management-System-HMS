import React, { useState } from "react";
import { FaBell, FaPlus, FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";

const CommunicationTools = () => {
  // Notices State
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Appointment Policy",
      description:
        "Please arrive 15 minutes before your scheduled appointment. Late arrivals may be rescheduled.",
    },
    {
      id: 2,
      title: "Staff Login Notice",
      description:
        "Unauthorized access is prohibited. Staff must use official credentials to log in.",
    },
    {
      id: 3,
      title: "System Maintenance",
      description:
        "The system may be unavailable during scheduled maintenance hours. Please save your work regularly.",
    },
    {
      id: 4,
      title: "Billing Information",
      description:
        "Ensure all billing details are accurate before submission to avoid delays.",
    },
  ]);

  const [newNotice, setNewNotice] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [receiverId, setReceiverId] = useState("");

  // Function to Add Notice
  const addNotice = () => {
    if (newNotice.trim()) {
      setNotices([
        ...notices,
        {
          id: notices.length + 1,
          title: "New Notice",
          description: newNotice,
        },
      ]);
      setNewNotice("");
    }
  };

  // Function to Delete Notice
  const deleteNotice = (id) => {
    setNotices(notices.filter((notice) => notice.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Communicate</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
          View Messages
        </button>
      </div>

      {/* Notice Board */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Notice Board <FaBell />
        </h3>
        <div className="mt-4 space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {notice.title}:
                </h4>
                <p className="text-gray-600">{notice.description}</p>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                  Edit
                </button>
                <button
                  onClick={() => deleteNotice(notice.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Notice Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          Add New Notice <FaPlus />
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Description"
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
            className="p-3 border rounded-md text-gray-900"
          />
          <select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="p-3 border rounded-md text-gray-900"
          >
            <option value="">To Admin / Staff</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
            <option value="Doctor">Doctor</option>
          </select>
          <button
            onClick={addNotice}
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Messaging Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          Message <FaEnvelope />
        </h3>
        <form className="mt-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Description"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border rounded-md text-gray-900"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Receiver ID"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
              className="p-3 pl-10 border rounded-md text-gray-900 w-full"
            />
            <FaEdit className="absolute left-3 top-3 text-gray-500" />
          </div>
          <select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="p-3 border rounded-md text-gray-900"
          >
            <option value="">To Doctor / Staff</option>
            <option value="Doctor">Doctor</option>
            <option value="Staff">Staff</option>
          </select>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunicationTools;
