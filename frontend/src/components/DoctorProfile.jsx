import React from "react";
import DoctorImage from "./../assets/doctor.jpg"
const DoctorProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        {/* Doctor's Photo */}
        <div className="flex justify-center">
          <img
            src= {DoctorImage} // Replace with actual doctor image URL
            alt="Doctor"
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        {/* Doctor's Information */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Dr. John Doe</h2>
          <p className="text-gray-600">Cardiologist</p>

          {/* Qualification */}
          <p className="mt-2 text-gray-700"><strong>Qualification:</strong> MBBS, MD (Cardiology)</p>

          {/* Availability */}
          <p className="mt-1 text-green-600 font-semibold">Available: Mon - Fri, 9 AM - 5 PM</p>

          {/* License Number */}
          <p className="mt-1 text-gray-700"><strong>License:</strong> XYZ123456</p>

          {/* Contact Information */}
          <div className="mt-3">
            <p className="text-gray-700"><strong>Contact:</strong> +91 98765 43210</p>
            <p className="text-gray-700"><strong>Email:</strong> johndoe@email.com</p>
          </div>

          {/* Call & Message Buttons */}
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Call
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
