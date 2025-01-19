import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Footer from "../components/Footer";
import { Highlight } from "@chakra-ui/react"
const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" min-h-[100vh] flex flex-col p-10 items-center gap-4">
        <span className="text-4xl font-bold text-rose-400">
          Build custom <span className="text-emerald-400">Email</span> templates
          and export for free.
        </span>
        <span className="text-lg">Email has never been easier. Create sophisticated email in minutes with drag and drop components.</span>
        <button className="bg-black hover:bg-zinc-600 text-white px-4 py-2 rounded-md">
            Get started
        </button>
        <div className="flex flex-wrap justify-center gap-6 w-full  p-4">
          <img
            src={img1}
            alt="img1"
            className="max-h-[500px] w-auto object-cover"
          />
          <img
            src={img2}
            alt="img2"
            className="w-auto max-h-[500px] object-cover"
          />
          <img
            src={img3}
            alt="img3"
            className="w-auto max-h-[500px] object-cover"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
