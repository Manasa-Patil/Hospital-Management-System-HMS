import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DoctorDashBoard from "./Doctor-DashBoard";
import AdminDashBoard from "./Admin_DashBoard"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AdminDashBoard />
  </React.StrictMode>
);
