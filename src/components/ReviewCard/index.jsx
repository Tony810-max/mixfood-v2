/* eslint-disable react/prop-types */
import { Quote, Star } from 'lucide-react';
import React from 'react';

export default function ReviewCard({ region, name, comment, dateTime }) {
  return (
    <div className="h-full flex flex-col items-center gap-5">
      <span className="text-2xl font-bold font-poppins-font ">{region}</span>
      <span className="border-solid border-y-2 border-x-[35px] border-black "></span>
      <div className="flex">
        <Star size={30} fill="#fefd00" color="" />
        <Star size={30} fill="#fefd00" color="" />
        <Star size={30} fill="#fefd00" color="" />
        <Star size={30} fill="#fefd00" color="" />
        <Star size={30} color="#fefd00" />
      </div>
      <Quote size={30} />
      <span className="text-lg text-justify font-Roboto-font min-h-[200px]">
        {comment}
      </span>
      <span className="text-xl italic font-bold ">- {name}</span>
      <span className="self-end italic font-bold">{dateTime}</span>
    </div>
  );
}
