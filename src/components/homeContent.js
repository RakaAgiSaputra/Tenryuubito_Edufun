import React from 'react';
import {useNavigate } from "react-router-dom";
const HomeContent = () => {

    const navigate = useNavigate()

    const handler = ()=>{
        navigate('/loginpage')
    }

    return (
      <div className="flex justify-between mx-40 max-w-100 ">
        <div className='w-1/2 my-20'>
          <h1 className="text-5xl font-bold">Selamat Datang di Edufun!</h1>
          <p>
            Platform belajar yang seru dan interaktif untuk meningkatkan
            literasi dan moral anak-anak.
          </p>
          <button onClick={handler} className='bg-custom-yellow rounded-lg px-10 py-2'>Mulai</button>
        </div>
        <div>
          <img src="/assets/boyi.png" alt=".." className='w-[400px]' />
        </div>
      </div>
    );
}

export default HomeContent;
