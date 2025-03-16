import React, { useState } from "react";
import { FaEdit, FaSearch } from "react-icons/fa";

const Messages = () => {
  const [description, setDescription] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [recipientType, setRecipientType] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to ${recipientType} (ID: ${receiverId})`);
  };

  return (
    <div className="p-6">
      {/* Message Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Message <FaEdit className="text-gray-500" />
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          {/* Description Input */}
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 border rounded-md text-gray-900 w-full"
            required
          />

          {/* Receiver ID Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Receiver ID"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
              className="p-3 pl-10 border rounded-md text-gray-900 w-full"
              required
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          {/* Recipient Type Selection */}
          <select
            value={recipientType}
            onChange={(e) => setRecipientType(e.target.value)}
            className="p-3 border rounded-md text-gray-900 w-full"
            required
          >
            <option value="">Select Recipient</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
            <option value="Doctor">Doctor</option>
          </select>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
