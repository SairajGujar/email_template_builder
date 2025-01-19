import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ token }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success("logged out");
    window.location.replace('/');
  };

  return (
    <nav className="bg bg-stone-600 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-amber-200">Mail</span>
              <span className="text-rose-200">Canvas</span>
            </div>
          </Link>

        

        <div className="relative">
          {token ? (
            <div>
              <button
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Profile
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md z-10">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-black hover:bg-zinc-700 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
