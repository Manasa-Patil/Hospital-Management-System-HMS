import React, { useState } from "react";
import { FaSearch, FaFileUpload } from "react-icons/fa";

const DocumentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([
    { name: "Licenses" },
    { name: "Agreements" },
    { name: "Certificates" },
  ]);

  const [newDocument, setNewDocument] = useState({
    name: "",
    role: "",
    folder: "",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUpload = () => {
    if (newDocument.name && newDocument.folder) {
      setDocuments([...documents, { name: newDocument.folder }]);
      setNewDocument({ name: "", role: "", folder: "" });
      alert("Document uploaded successfully!");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Documents Management</h2>
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
      </div>

      {/* Folders Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {documents
          .filter((doc) =>
            doc.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((doc, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
            >
              <div className="text-6xl text-yellow-500">📂</div>
              <h3 className="text-lg font-semibold mt-2">{doc.name}</h3>
              <select className="mt-2 p-2 border rounded-md w-full">
                <option>Role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
              <button className="mt-2 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition">
                Edit
              </button>
            </div>
          ))}
      </div>

      {/* Upload Document Section */}
      <div className="p-6 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
          Upload Document <FaFileUpload />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Document"
            value={newDocument.name}
            onChange={(e) =>
              setNewDocument({ ...newDocument, name: e.target.value })
            }
            className="p-3 border rounded-md w-full"
          />
          <select
            className="p-3 border rounded-md w-full"
            value={newDocument.role}
            onChange={(e) =>
              setNewDocument({ ...newDocument, role: e.target.value })
            }
          >
            <option value="">Role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
          <input
            type="text"
            placeholder="Folder"
            value={newDocument.folder}
            onChange={(e) =>
              setNewDocument({ ...newDocument, folder: e.target.value })
            }
            className="p-3 border rounded-md w-full"
          />
        </div>
        <button
          onClick={handleUpload}
          className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default DocumentManagement;
