import React from "react";

const appointments = [
  {
    id: 1,
    name: "John Doe",
    time: "10:00 AM",
    status: "Confirmed",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    time: "11:30 AM",
    status: "Pending",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alex Brown",
    time: "1:00 PM",
    status: "Confirmed",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily Davis",
    time: "2:30 PM",
    status: "Rescheduled",
    image: "https://via.placeholder.com/150",
  },
];

const Appointments = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 ">Appointments For Today</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white shadow-lg rounded-lg flex p-4 items-center gap-4">
            {/* Patient Image */}
            <img
              src={appointment.image}
              alt={appointment.name}
              className="w-20 h-20 rounded-md object-cover"
            />

            {/* Patient Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{appointment.name}</h3>
              <p className="text-gray-600">Time: {appointment.time}</p>
              <p className={`font-semibold ${appointment.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>
                Status: {appointment.status}
              </p>
            </div>

            {/* Report Button */}
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition">
              Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
