import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center min-h-[100vh] pt-10">
        <div className="flex justify-between w-[80%]">
          <span className="text-xl font-semibold">
            Welcome! Start creating custom Email now
          </span>
          <button className="text-green-500 cursor-pointer hover:underline">Create</button>
        </div>
        <div className="flex gap-4">

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
