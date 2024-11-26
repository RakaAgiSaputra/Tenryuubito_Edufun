import React, { useState } from "react";
import {Link } from "react-router-dom";

function MainContent() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header */}

      <div className="flex">
        {/* Side bar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold">Icon side bar</h2>
            <ul className="mt-6">
              <li className="py-2">
                <Link to={"/ceritapembuka"}>Cerita pembuka</Link>
              </li>
              <li className="py-2">
                <Link to={"/bukucerita"}>Buku Cerita</Link>
              </li>
              <li className="py-2">
                <Link to={"/videoedukasi"}>Video Edukasi</Link>
              </li>
              <li className="py-2">
                <Link to={"/misi"}>Misi</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Main content */}
        <div
          className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
            isOpen ? "ml-64" : "ml-0"
          }`}
        >
          <button
            className="text-white bg-blue-700 px-4 py-2 rounded-md mb-4"
            onClick={toogleSideBar}
          >
            =
          </button>
        </div>

        {/* Content */}
      </div>
    </>
  );
}

export default MainContent;
