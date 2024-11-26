import React from 'react';

import { BrowserRouter as Router, Routes, Route,useNavigate, Link } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();

    const handler = () => {
      navigate("/maincontent");
    };


    return (
      <>
        <div className="flex justify-center items-center ">
          <div className=" p-20 justify-center items-center border  border-custom-yellow rounded-lg ">
            <h1 className="text-center font-bold text-2xl ">Login</h1>
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
              type="text"
              className="border border-custom-yellow p-2 rounded-full w-full my-2 "
            />

            <p>
              Belum punya akun?
              <strong>
                <Link to={"/registerpage"}>Masuk disini</Link>
              </strong>
            </p>

            <button
              onClick={handler}
              className=" text-2xl bg-custom-yellow w-1/2 rounded-full my-2 mx-[90px]"
            >
              Masuk
            </button>
          </div>
        </div>
      </>
    );
}

export default LoginPage;
