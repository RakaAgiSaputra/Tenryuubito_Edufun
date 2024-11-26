import React from "react";
// import { Link } from "react-router-dom";
// // import logo from "./images/img_logo.png"

const Navbar = () => {
  return (
    <nav className="flex mx-40 max-w-100 justify-between bg-white p-4">
      <div>
        <img src="/assets/img_logo.png" alt=".." width={40} />
      </div>

      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-bold">
              About
            </a>
          </li>

          <li>
            <a href="#" className="font-bold">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
