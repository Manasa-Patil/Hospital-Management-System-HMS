import React, { useState } from "react";
import Image from "./../assets/Person.jpg";
const TrainingAndCertification = () => {
  const [certifications, setCertifications] = useState([
    { id: "001", name: "John Doe", certification: "CPR Certification", status: "Completed", expiry: "12/12/2025", image: "https://via.placeholder.com/50", isEditing: false },
    { id: "002", name: "Jane Smith", certification: "First Aid Training", status: "Completed", expiry: "01/05/2024", image: "https://via.placeholder.com/50", isEditing: false },
    { id: "003", name: "Michael Johnson", certification: "HIPAA Training", status: "Pending", expiry: "15/03/2026", image: "https://via.placeholder.com/50", isEditing: false },
    { id: "004", name: "Emily Brown", certification: "ACLS", status: "Ongoing", expiry: "28/02/2028", image: "https://via.placeholder.com/50", isEditing: false },
    { id: "005", name: "David Wilson", certification: "PALS", status: "Pending", expiry: "11/12/2025", image: "https://via.placeholder.com/50", isEditing: false },
    { id: "006", name: "Sarah Miller", certification: "CRC", status: "Completed", expiry: "25/03/2026", image: "https://via.placeholder.com/50", isEditing: false },
    { id: "007", name: "Kevin Lee", certification: "CPht", status: "Ongoing", expiry: "10/05/2026", image: "https://via.placeholder.com/50", isEditing: false },
  ]);

  const [search, setSearch] = useState("");

  // Toggle edit mode
  const toggleEdit = (id) => {
    setCertifications(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, isEditing: !cert.isEditing } : cert
      )
    );
  };

  // Handle update of certification fields
  const handleUpdate = (id, field, value) => {
    setCertifications(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Training and Certification</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="🔍 Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Avatar</th>
              <th className="p-3">Staff Name</th>
              <th className="p-3">Certification Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {certifications
              .filter((cert) => cert.name.toLowerCase().includes(search.toLowerCase()))
              .map((cert) => (
                <tr key={cert.id} className="border-t">
                  <td className="p-3">{cert.id}</td>
                  <td className="p-3">
                    <img src={Image} alt={cert.name} className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="p-3">{cert.name}</td>

                  {/* Certification Name - Editable */}
                  <td className="p-3">
                    {cert.isEditing ? (
                      <input
                        type="text"
                        value={cert.certification}
                        onChange={(e) => handleUpdate(cert.id, "certification", e.target.value)}
                        className="p-2 border rounded-md w-full"
                      />
                    ) : (
                      cert.certification
                    )}
                  </td>

                  {/* Status - Editable */}
                  <td className="p-3">
                    {cert.isEditing ? (
                      <select
                        value={cert.status}
                        onChange={(e) => handleUpdate(cert.id, "status", e.target.value)}
                        className="p-2 border rounded-md w-full"
                      >
                        <option value="Completed">Completed</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Pending">Pending</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded-md text-white ${
                          cert.status === "Completed"
                            ? "bg-green-500"
                            : cert.status === "Ongoing"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {cert.status}
                      </span>
                    )}
                  </td>

                  {/* Expiry Date - Editable */}
                  <td className="p-3">
                    {cert.isEditing ? (
                      <input
                        type="date"
                        value={cert.expiry}
                        onChange={(e) => handleUpdate(cert.id, "expiry", e.target.value)}
                        className="p-2 border rounded-md w-full"
                      />
                    ) : (
                      cert.expiry
                    )}
                  </td>

                  {/* Actions: Toggle Edit Mode */}
                  <td className="p-3">
                    <button
                      className={`${
                        cert.isEditing ? "bg-green-500" : "bg-purple-500"
                      } text-white px-4 py-2 rounded-md hover:opacity-80 transition`}
                      onClick={() => toggleEdit(cert.id)}
                    >
                      {cert.isEditing ? "Save" : "Update"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingAndCertification;
