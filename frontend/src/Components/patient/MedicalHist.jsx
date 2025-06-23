import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Download } from "lucide-react";

const MedicalHistory = () => {
  const patientInfo = {
    name: "Alex John",
    status: "Active",
    age: 35,
    nationality: "USA",
    bloodType: "O+",
  };

  const records = [
    {
      title: "Diagnoses",
      description: "Hypertension diagnosed.",
      date: "2022-05-14",
      image: "link_to_image_1.jpg",
    },
    {
      title: "Treatments",
      description: "Physical therapy sessions.",
      date: "2023-01-10",
      image: "link_to_image_2.jpg",
    },
    {
      title: "Medications",
      description: "Prescribed Lisinopril.",
      date: null,
      status: "Active",
    },
    {
      title: "Allergies",
      description: "Allergic to penicillin.",
      status: "Critical",
    },
    {
      title: "Test Results",
      description: "Normal blood test results.",
      date: "2023-02-22",
    },
  ];

  return (
    // Use container-fluid to allow full-width layout
    <div className="container-fluid mt-4">
      {/* Patient Info Card */}
      <div className="card shadow-sm p-3 mb-4">
        <h2 className="text-center">{patientInfo.name}</h2>
        <p className="text-center text-muted">
          Status: {patientInfo.status} | Age: {patientInfo.age} | Blood Type:{" "}
          {patientInfo.bloodType}
        </p>
        <div>
          <button
            className="btn "
            style={{ backgroundColor: "rgba(14, 39, 82, 1)", color: "white" }}
          >
            <Download size={16} /> <span>Download Reports</span>
          </button>
        </div>
      </div>

      {/* Action Buttons */}

      {/* Medical History Records */}
      <h3 className="mb-3 text-center" style={{ color: "rgba(14, 39, 82, 1)" }}>
        Medical History
      </h3>
      <div className="row">
        {records.map((record, index) => (
          // Use col-12 for full width on small screens and col-md-6 for half width on medium screens and above
          <div className="col-12 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm p-3 h-100">
              <h5
                className="card-title"
                style={{ color: "rgba(14, 39, 82, 1)" }}
              >
                {record.title}
              </h5>
              <p className="card-text">{record.description}</p>
              {record.date && <p className="text-muted">Date: {record.date}</p>}
              {record.status && (
                <p className="text-danger">Status: {record.status}</p>
              )}
              {record.image && (
                <img
                  src={record.image}
                  alt={record.title}
                  className="img-fluid mt-2 rounded"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
