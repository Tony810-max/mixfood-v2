/* eslint-disable react/prop-types */
import React from 'react';

export default function AboutFoodCard({ image, name }) {
  return (
    <div className="relative w-full h-full rounded-xl cursor-grabbing">
      <img src={image} className="w-full h-full rounded-xl " alt="" />
      <div className="absolute z-10 bottom-0 w-full bg-[#bfa58a] flex justify-center rounded-b-xl">
        <span className="text-lg font-bold  text-center text-[var(--white-color)]">
          {name}
        </span>
      </div>
    </div>
  );
}
