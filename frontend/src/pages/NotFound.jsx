import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-2xl text-gray-700">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
                Go Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
