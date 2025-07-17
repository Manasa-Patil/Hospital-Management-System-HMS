import React, { useState, useEffect } from "react";
import {  ToastContainer, toast } from "react-toastify";
import { FaEdit, FaSave } from "react-icons/fa"; // Import icons
import "./Dashboard.css";
import Profileimg from "../../assets/profile-icon.png.jpg";
import MedicalLogo from "../../assets/Medical-logo.jpg";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
 
  // show a toast when the page first loads
  useEffect(() => {
    toast.info("Edit or create your profile.");
  }, []);


  const [profile, setProfile] = useState({
    id: "", // Patient ID, must be numeric
    firstName: "",
    lastName: "",
    email: "",
    DOB: "",
    bloodGroup: "",
    address: "",
    phone: "",
    age: "",
  });

  const saveProfile = () => {
    console.log("pid: ", profile.id);
    axios
      .put(
        `http://localhost:8000/api/patient/684afa77e93e8ce7e247c6b1`,
        profile
      )
      .then((res) => {
        console.log("Profile updated successfully");
        // show a popup after a successful update
      
        toast.success("Profile updated successfully.");
        setIsEditing(false);
      })
      .catch((err) => {
        console.error(
          "Error updating profile:",
          err.response?.data || err.message || err
        );
           toast.error("Error updating profile.");
      });
  };

  // const [username, setUsername] = useState("");
  // const [role, setRole] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // setUsername(response.data.username);
        // setRole(response.data.role);
        console.log("Profile API response: ", response.data);

        // 🔑 Set profile.name using the fetched username
        setProfile((prev) => ({
          ...prev,
          name: response.data.username,
          role: response.data.role,
          id: response.data.id || "", // include id if backend sends it
        }));
        console.log("ppid: ", response.data.id);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid p-3 vh-100 d-flex flex-column">
      {/* Profile Header */}
      <div className="header d-flex align-items-center mb-4">
        <div className="Hsptl-logo mt-2">
          <img
            src={MedicalLogo}
            alt="Hospital Logo"
            style={{ height: "70px", objectFit: "contain" }}
          />
        </div>

        <div className="user-profile d-flex align-items-center">
          <div className="profile-img me-2">
            {profile.name ? profile.name.charAt(0) : ""}
          </div>
          <div className="user-info">
            <div
              className="user-name"
              style={{ fontWeight: "normal", fontSize: "14px" }}
            >
              {profile.name}
            </div>
            <div className="user-role">{profile.role}</div>
          </div>
        </div>
      </div>

      {/* Main Profile Section */}
      <div className="d-flex justify-content-center flex-grow-1">
        <div className="profile-container p-4 border rounded shadow-sm bg-white d-flex flex-column">
          <h3
            className="text-center mb-3"
            style={{ color: "rgba(20, 50, 100, 1)" }}
          >
            Patient Detail
          </h3>

          {/* Profile Image & Edit Button */}
          <div className="profile-img-container">
            <img className="patient-img" src={Profileimg} alt="Profile" />
            {/* Small Edit Button on Image */}
            <button
              className="edit-btn"
              onClick={() => {
                if (isEditing) {
                  saveProfile(); // save changes to backend
                } else {
                  setIsEditing(true);
                }
              }}
            >
              {isEditing ? <FaSave /> : <FaEdit />}
            </button>
          </div>

          {/* Editable Inputs */}
          <div className="patient-info text-start flex-grow-1">
            {isEditing ? (
              <>
                <label className="form-label">Patient Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="DOB"
                  value={profile.dob}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Patient ID</label>
                <input
                  type="text"
                  name="id"
                  value={profile.id}
                  disabled
                  className="form-control mb-2"
                />

                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Residential Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Age</label>
                <input
                  type="text"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  className="form-control mb-2"
                />

                <label className="form-label">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={profile.bloodGroup}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
              </>
            ) : (
              <>
                <div className="mb-2">
                  <strong>Patient Name:</strong> {profile.name}
                </div>
                <div className="mb-2">
                  <strong>Date of Birth:</strong> {profile.DOB}
                </div>
                <div className="mb-2">
                  <strong>Patient ID:</strong> {profile.id}
                </div>
                <div className="mb-2">
                  <strong>Contact Number:</strong> {profile.phone}
                </div>
                <div className="mb-2">
                  <strong>Residential Address:</strong> {profile.address}
                </div>
                <div className="mb-2">
                  <strong>Age:</strong> {profile.age}
                </div>
                <div className="mb-2">
                  <strong>Blood Group:</strong> {profile.bloodGroup}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
       <ToastContainer />
    </div>
   
  );
}

export default Profile;
