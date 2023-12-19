/* eslint-disable react/prop-types */
import React from 'react';

export default function SpecialCard({ image, name, price, title, label }) {
  return (
    <div className="flex flex-col sm:flex-row  w-full gap-3">
      <div className="w-full sm:w-[200px] h-[200px]">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col justify-center sm:gap-0 gap-2 px-3 sm:0">
        <div className="flex justify-between ">
          <span className="text-2xl font-bold text-[--secondary-color]">
            {name}
          </span>
          <span className="text-lg">VND {price}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-lg italic">{title}</span>
          <span className="text-lg bg-[--primary-color] text-[--white-color] py-1 px-2 font-semibold italic">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
