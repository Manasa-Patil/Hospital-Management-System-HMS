import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Performance = () => {
  // Line Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patient Satisfaction",
        data: [70, 60, 75, 80, 85, 90],
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        tension: 0.4,
      },
      {
        label: "Staff Performance",
        data: [50, 80, 60, 85, 55, 50],
        borderColor: "#F43F5E",
        backgroundColor: "#F43F5E",
        tension: 0.4,
      },
      {
        label: "Doctor Performance",
        data: [60, 65, 70, 60, 75, 85],
        borderColor: "#06B6D4",
        backgroundColor: "#06B6D4",
        tension: 0.4,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ["JAN", "FEB", "MAR"],
    datasets: [
      {
        label: "Total Consultation",
        data: [80, 95, 85],
        backgroundColor: "#6366F1",
      },
      {
        label: "Successful Treatment",
        data: [90, 85, 70],
        backgroundColor: "#F43F5E",
      },
      {
        label: "Average Consultation Time",
        data: [50, 20, 25],
        backgroundColor: "#06B6D4",
      },
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Performance Line Chart */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
        <Line data={lineData} />
      </div>

      {/* Statistics Bar Chart */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Statistics</h2>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Performance;
