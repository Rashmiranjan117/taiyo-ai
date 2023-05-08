import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-4 py-4 bg-custom-blue text-custom-white">
      <div>
        <h1 className="text-xl">Chartbook</h1>
      </div>
      <div className="flex gap-x-3">
        <Link to="/" className="text-custom-white hover:text-custom-red hover:underline">
          Contact
        </Link>
        <Link to="/chart" className="text-custom-white hover:text-custom-red hover:underline">
          Chart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
