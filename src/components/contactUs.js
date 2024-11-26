import React from 'react';

const ContactUs = () => {
    return (
      <>
        <h1 className="text-lg  font-bold text-center">Contact Us</h1>
        <div className="flex gap-4 justify-between mx-40 p-40 ">
          <div className="flex flex-col bg-gray-100 rounded-lg  justify-center items-center p-20">
            <img src="/assets/img_raka.svg" alt="" width={2000} />
            <h1 className="font-bold">Raka Agi Saputra</h1>
            <h2 className="font-light">Founder of Edufun</h2>
            <p className="font-light">putrarakasa@gmail.com</p>
          </div>
          <div className="flex flex-col bg-gray-100 rounded-lg justify-center items-center p-20">
            <img src="/assets/img_raka.svg" alt="" width={2000} />
            <h1 className="font-bold">Dwi Nurul Azizah</h1>
            <h2 className="font-light">Founder of Edufun</h2>
            <p className="font-light">dwinurul0904@gmail.com</p>
          </div>
        </div>
      </>
    );
}

export default ContactUs;
