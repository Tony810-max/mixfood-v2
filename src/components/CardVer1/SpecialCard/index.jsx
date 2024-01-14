/* eslint-disable react/prop-types */
import React from 'react';

export default function SpecialCard({ image, name, price, title, label }) {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-3 border border-black ">
      <div className="w-full sm:w-[300px] h-[250px]">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col justify-center gap-4 px-4">
        <div className="flex justify-between ">
          <span className="text-2xl font-bold text-[--secondary-color]">
            {name}
          </span>
          <span className="text-lg">
            {Number(price).toLocaleString('it', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-lg italic">{title}</span>
          <span className="text-lg bg-[--primary-color] text-[--white-color] py-1 px-2 font-semibold italic rounded-xl">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
