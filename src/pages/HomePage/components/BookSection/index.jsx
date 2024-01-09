import React from 'react';

import imgBook from '../../../../assets/images/About/BookATable.png';
import { Link } from 'react-router-dom';
import BookForm from './BookForm';

export default function BookSection() {
  return (
    <div className="min-h-[80vh] flex flex-col  items-center  w-full relative ">
      <img src={imgBook} alt="" className="w-full h-full absolute" />
      <span className="text-[--white-color] z-10 text-5xl font-dancing-script sm:py-6 py-4 italic">
        Book Now!
      </span>
      <div className="container flex w-full relative mt-14">
        <div className="z-10 flex flex-col justify-center pr-2  ">
          <BookForm />
          <Link />
        </div>
      </div>
    </div>
  );
}
