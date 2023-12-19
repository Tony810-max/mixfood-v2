/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OurSevicesCard({ image, title, content, check }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="lg:row-span-2 relative flex items-center justify-center">
      <img src={image} alt="" className="h-full w-full" />
      <div className="absolute bg-[#eee] opacity-50 w-full h-full">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <span className="text-[--black-color] font-Roboto-font text-xl lg:text-3xl">
            {title}
          </span>
          <span className="text-[--black-color] font-extrabold font-poppins-font text-5xl lg:text-6xl italic">
            {content}
          </span>
          <Link
            to={'/'}
            className="no-underline relative hover:animate-translate-X"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span className="text-[--black-color]  font-Roboto-font text-xl lg:text-3xl hover:text-[--primary-color] ">
              {check}
              <div
                className={`absolute left-0 w-0 h-1 bg-[--secondary-color] transition-all duration-1000 ease-in-out ${
                  hover ? 'w-full' : ''
                }`}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
