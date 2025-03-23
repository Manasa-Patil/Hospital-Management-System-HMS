import React, { useState } from "react";
import DoctorImage from "./../assets/doctor.jpg";
const StaffManagement = () => {
  const [staff, setStaff] = useState([
    { id: "001", name: "John Doe", availability: "Available", taskType: "task 1", completion: "Completed", image: "https://via.placeholder.com/50" },
    { id: "002", name: "Jane Smith", availability: "On Leave", taskType: "task 2", completion: "Pending", image: "https://via.placeholder.com/50" },
    { id: "003", name: "Michael Johnson", availability: "Available", taskType: "task 3", completion: "Pending", image: "https://via.placeholder.com/50" },
    { id: "004", name: "Emily Brown", availability: "Available", taskType: "task 4", completion: "Completed", image: "https://via.placeholder.com/50" },
    { id: "005", name: "David Wilson", availability: "On Leave", taskType: "task 5", completion: "Completed", image: "https://via.placeholder.com/50" },
    { id: "006", name: "Sarah Miller", availability: "Available", taskType: "task 6", completion: "Pending", image: "https://via.placeholder.com/50" },
    { id: "007", name: "Kevin Lee", availability: "On Leave", taskType: "task 7", completion: "Pending", image: "https://via.placeholder.com/50" },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newStaff, setNewStaff] = useState({
    id: "",
    name: "",
    availability: "Available",
    taskType: "Dropdown",
    completion: "Dropdown",
    image: "",
  });

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  // Function to add new staff
  const addStaff = (e) => {
    e.preventDefault();
    if (newStaff.id && newStaff.name && newStaff.image) {
      setStaff([...staff, newStaff]);
      setNewStaff({ id: "", name: "", availability: "Available", taskType: "Dropdown", completion: "Dropdown", image: "" });
      setShowForm(false);
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div className="p-6">
      {/* Staff Management Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Staff Management</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="🔍 Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-md"
          />
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Add New Staff"}
          </button>
        </div>
      </div>

      {/* Add Staff Form (Shown When Button Clicked) */}
      {showForm && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800">Add New Staff</h3>
          <form onSubmit={addStaff} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="id" placeholder="Staff ID" value={newStaff.id} onChange={handleInputChange} className="p-3 border rounded-md text-gray-900" required />
            <input type="text" name="name" placeholder="Full Name" value={newStaff.name} onChange={handleInputChange} className="p-3 border rounded-md text-gray-900" required />
            <input type="text" name="image" placeholder="Avatar URL" value={newStaff.image} onChange={handleInputChange} className="p-3 border rounded-md text-gray-900" required />
            <select name="availability" value={newStaff.availability} onChange={handleInputChange} className="p-3 border rounded-md text-gray-900">
              <option value="Available">Available</option>
              <option value="On Leave">On Leave</option>
            </select>
            <select name="taskType" value={newStaff.taskType} onChange={handleInputChange} className="p-3 border rounded-md text-gray-900">
              <option>Dropdown</option>
              <option>Task 1</option>
              <option>Task 2</option>
            </select>
            <select name="completion" value={newStaff.completion} onChange={handleInputChange} className="p-3 border rounded-md text-gray-900">
              <option>Dropdown</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition w-full md:w-auto">
              Add Staff
            </button>
          </form>
        </div>
      )}

      {/* Staff Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Avatar</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Availability</th>
              <th className="p-3">Task Type</th>
              <th className="p-3">Completion</th>
              <th className="p-3">Modify</th>
            </tr>
          </thead>
          <tbody>
            {staff
              .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
              .map((s) => (
                <tr key={s.id} className="border-t">
                  <td className="p-3">{s.id}</td>
                  <td className="p-3">
                    <img src={DoctorImage} alt={s.name} className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">
                    <select value={s.availability} className="border p-2 rounded-md">
                      <option value="Available">Available</option>
                      <option value="On Leave">On Leave</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <select className="border p-2 rounded-md">
                      <option>Dropdown</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <select className="border p-2 rounded-md">
                      <option>Dropdown</option>
                      <option>Completed</option>
                      <option>Pending</option>
                    </select>
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
    </div>
  );
};

export default StaffManagement;
