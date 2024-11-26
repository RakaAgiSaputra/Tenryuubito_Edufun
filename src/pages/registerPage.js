import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RegisterPage = () => {
    return (
      <>
        <div className="flex mt-40 justify-center items-center ">
          <div className=" p-20 justify-center items-center border  border-custom-yellow rounded-lg ">
            <h1 className="text-center font-bold text-2xl ">Register</h1>
            <p className="text-center">
              Catat dan Ingat username yang sudah dibuat
            </p>
            <input
              placeholder="Masukan username"
              type="text"
              className="border border-custom-yellow p-2 rounded-full w-full my-2"
            />
            <input
              placeholder="Masukan Password"
              type="password"
              className="border border-custom-yellow p-2 rounded-full w-full my-2 "
            />
            <input
              placeholder="Konfirmasi Password"
              type="password"
              className="border border-custom-yellow p-2 rounded-full w-full my-2 "
            />

            <p>
              Sudah punya akun?
              <strong>
                <Link to={"/loginpage"}>Masuk disini</Link>
              </strong>
            </p>

            <button className=" text-2xl bg-custom-yellow w-1/2 rounded-full my-2 mx-[90px]">
              Masuk
            </button>
          </div>
        </div>
      </>
    );
}

export default RegisterPage;