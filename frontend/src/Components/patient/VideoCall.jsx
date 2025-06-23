// import React, { useState } from "react";
// import "../../index.css";
// import axios from "axios";

// const VideoCall = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     age: "",
//     bloodGroup: "",
//     reason: "",
//     history: "",
//     date: "",
//     time: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8000/api/appointment", {
//         fullName: formData.name,
//         email: formData.email,
//         address: formData.address,
//         age: formData.age,
//         bloodGroup: formData.bloodGroup,
//         reasonForConsultation: formData.reason,
//         pastMedicalHistory: formData.history,
//         preferredDate: formData.date,
//         preferredTime: formData.time,
//         patientId: "6831efe4177edce048f783fd", // TODO: Replace with dynamic value when auth is ready
//       });

//       alert("Appointment booked successfully!");
//       // You can redirect or clear form here if needed
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       alert("Something went wrong while booking the appointment.");
//     }
//   };

//   return (
//     <main className="col-md-9 col-lg-10 p-4 d-flex flex-column flex-grow-1 offset-md-3 offset-lg-2">
//       <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-100 h-100">
//         <form
//           onSubmit={handleSubmit}
//           className="grid gap-6 bg-white p-10 rounded-lg shadow-xl w-full max-w-5xl mx-auto"
//         >
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4 border-b pb-2">
//             Book an Appointment
//           </h2>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               name="name"
//               onChange={handleChange}
//               value={formData.name}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               name="email"
//               type="email"
//               onChange={handleChange}
//               value={formData.email}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Address
//             </label>
//             <input
//               name="address"
//               onChange={handleChange}
//               value={formData.address}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Age
//               </label>
//               <input
//                 name="age"
//                 type="number"
//                 onChange={handleChange}
//                 value={formData.age}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Blood Group
//               </label>
//               <input
//                 name="bloodGroup"
//                 onChange={handleChange}
//                 value={formData.bloodGroup}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Reason for Consultation
//             </label>
//             <textarea
//               name="reason"
//               onChange={handleChange}
//               value={formData.reason}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Past Medical History
//             </label>
//             <textarea
//               name="history"
//               onChange={handleChange}
//               value={formData.history}
//               className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//             ></textarea>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Preferred Date
//               </label>
//               <input
//                 name="date"
//                 type="date"
//                 onChange={handleChange}
//                 value={formData.date}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Preferred Time
//               </label>
//               <input
//                 name="time"
//                 type="time"
//                 onChange={handleChange}
//                 value={formData.time}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-end items-center gap-4 mt-6">
//             <button
//               type="submit"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default VideoCall;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const VideoCall = () => {
  // Declare state
  const [formData, setFormData] = useState({
    doctorId: '',
  doctorName: '',
    name: "",
    email: "",
    address: "",
    age: "",
    bloodGroup: "",
    reason: "",
    history: "",
    date: "",
    time: "",
  });

  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Handle form input change
// Inside handleChange:
const handleChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));

  if (e.target.name === "doctorId") {
    // Capture doctor's name based on the selected option
    const selectedOption = e.target.selectedOptions[0].text;
    setFormData((prev) => ({
      ...prev,
      doctorId: e.target.value,
      doctorName: selectedOption,
    }));
  }
};



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mock API call — replace with your API
      const response = await axios.post(
        "http://localhost:8000/api/appointment",
        {
          fullName: formData.name,
          email: formData.email,
          address: formData.address,
          age: formData.age,
          bloodGroup: formData.bloodGroup,
          specialization: formData.specialization,
          doctorName: formData.doctorName,
          reasonForConsultation: formData.reasonForConsultation,
          doctorId: formData.doctorId,
          pastMedicalHistory: formData.history,
          preferredDate: formData.date,
          preferredTime: formData.time,
          patientId: "6831efe4177edce048f783fd", // replace with your patientId
        }
      );

      setAppointments((prev) => [...prev, response.data]);

      alert("Appointment booked successfully!");
      setShowForm(false);
    } catch (error) {
      console.error("Error booking appointment.", error);
      alert("Something went wrong while booking the appointment.");
    }
  };

  return (
    <main className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar space */}
        <div className="col-md-2"></div>

        {/* Main content */}
        <div className="col-md-9">
          {/* Button to show form */}
          <div className="mb-4">
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              Book new Appointment
            </button>
          </div>

          {/* Form with cancel button */}
          {showForm && (
            <div className="card shadow-lg mb-4">
              <div
                className="card-header text-center d-flex justify-content-between align-items-center text-white"
                style={{ backgroundColor: "rgba(14, 39, 82, 1)" }}
              >
                <h3>Book an Appointment</h3>
                <button
                  aria-label="Close form"
                  className="btn btn-light btn-sm"
                  onClick={() => setShowForm(false)}
                >
                  X
                </button>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* form fields (same as previously)*/}
                  {/* I kept them for completeness*/}
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Blood Group</label>
                      <input
                        type="text"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-3">
                      <label className="form-label">Specialization</label>
                      <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="">Select Specialization</option>
                        <option value="General Medicine">
                          General Medicine
                        </option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Dermatology">Dermatology</option>
                        {/* add more as needed */}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Doctor</label>
                      <select
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="">Select Doctor</option>
                        {/* This list should normally come from your API based on specialization*/}
                        <option value="1">Dr. Smith (General Medicine)</option>
                        <option value="2">Dr. Patel (Pediatrics)</option>
                        {/* etc */}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Past Medical History</label>
                    <textarea
                      name="history"
                      value={formData.history}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Reason For Consultation
                    </label>
                    <textarea
                      name="reasonForConsultation"
                      value={formData.reasonForConsultation}
                      onChange={handleChange}
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Preferred Time</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-end mt-4">
                    <button
                      type="submit"
                      className="btn px-4"
                      style={{
                        backgroundColor: "rgba(14, 39, 82, 1)",
                        color: "white",
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Display table with history of appointments */}
          {appointments.length > 0 && (
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((item, index) => (
                  <tr key={index}>
                    <td>{formData.date}</td>
                    <td>{formData.time}</td>
                    {/* Assuming API response includes these details*/}
                    <td>{formData.doctorName || "Not yet assigned"}</td>
                    <td>{formData.specialization || "Unknown"}</td>
                    <td>{item.status ? item.status : "Pending approval"}</td>
                    <td>
                      {item.status === "Approved" ? (
                        <a href="/payment" className="btn btn-primary">
                          Pay Now
                        </a>
                      ) : (
                        "Not payable yet"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default VideoCall;
