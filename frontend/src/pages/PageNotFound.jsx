import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-8xl font-extrabold text-blue-600 dark:text-blue-400">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
