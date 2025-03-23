import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Feedback = () => {
  // Donut Chart Data
  const feedbackData = {
    labels: ["Neutral Feedback", "Positive Feedback", "Negative Feedback"],
    datasets: [
      {
        data: [30, 35, 10], // Percentages
        backgroundColor: ["#6366F1", "#F43F5E", "#06B6D4"], // Colors
        hoverBackgroundColor: ["#4F46E5", "#E11D48", "#0891B2"],
      },
    ],
  };

  // Semi-Circle Chart Data
  const monthlyData = {
    labels: ["Completed", "In Progress"],
    datasets: [
      {
        data: [72, 28],
        backgroundColor: ["#6366F1", "#CBD5E1"],
        hoverBackgroundColor: ["#4F46E5", "#94A3B8"],
      },
    ],
  };

  const patientFeedbacks = [
    "The service was excellent!",
    "Doctors were very attentive and caring.",
    "Had to wait longer than expected, but overall good experience.",
    "The hospital was very clean and well-maintained.",
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Feedback Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Feedback</h2>
          <Doughnut data={feedbackData} />
          <div className="mt-4">
            <p className="text-sm"><span className="text-blue-500">●</span> Neutral Feedback 30%</p>
            <p className="text-sm"><span className="text-pink-500">●</span> Positive Feedback 35%</p>
            <p className="text-sm"><span className="text-cyan-500">●</span> Negative Feedback 10%</p>
          </div>
        </div>

        {/* Monthly Feedback Chart */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Monthly Feedback</h2>
          <Doughnut data={monthlyData} options={{ circumference: 180, rotation: 270 }} />
          <div className="mt-4 text-center">
            <p className="text-sm"><span className="text-indigo-500">●</span> Completed 72%</p>
            <p className="text-sm"><span className="text-gray-500">●</span> In Progress 28%</p>
          </div>
        </div>
      </div>

      {/* Patient Feedback Section */}
      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Patients Feedback</h2>
        <div className="space-y-3">
          {patientFeedbacks.map((feedback, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 border-b">
              <span className="text-gray-500">👤</span>
              <p className="text-gray-700">{feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
