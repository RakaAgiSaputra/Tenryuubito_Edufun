import React from 'react';

const AboutContent = () => {
    return (
      <>
        <h1 className="text-lg font-bold text-center">About Us</h1>
        <div className="flex justify-between mx-40 ">
          <div className="p-20">
            <img src="/assets/img_logo.png" alt="" width={2000} />
          </div>
          <div>
            <p className="p-20">
              <strong>Lorem ipsum dolor</strong> sit amet consectetur. Iaculis
              non dui nec massa mauris malesuada a nisi. Accumsan semper porta
              at aliquam pellentesque ultricies. Nisi quam sed dis dolor semper
              tellus. Egestas tellus congue malesuada mi eget pellentesque
              commodo.Lorem ipsum dolor sit amet consectetur. Iaculis non dui
              nec massa mauris malesuada a nisi. Accumsan semper porta at
              aliquam pellentesque ultricies. Nisi quam sed dis dolor semper
              tellus. Egestas tellus congue malesuada mi eget pellentesque
              commodo.Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </>
    );
}

export default AboutContent;
