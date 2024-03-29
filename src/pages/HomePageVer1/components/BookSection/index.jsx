import React from 'react';

import imgBook from '../../../../assets/images/About/about.png';
// import { Link } from 'react-router-dom';
import BookForm from './BookForm';

export default function BookSection() {
  return (
    <div className="flex flex-col items-center container w-full h-full">
      <span className="lg:text-5xl text-3xl text-center w-full font-dancing-script sm:py-6 py-4 italic">
        BOOK NOW
      </span>
      <div className=" flex h-full gap-4 flex-col lg:flex-row">
        <div className="flex-1">
          <img src={imgBook} alt="" className="w-full h-full " />
        </div>
        <div className="flex-1 flex flex-col justify-center px-2  gap-4">
          <span className="font-poppins-font text-center text-xl lg:text-2xl italic font-semibold">
            Book for the restaurant now
          </span>
          <BookForm />
        </div>
      </div>
    </div>
  );
}
