import React from 'react';

import imgBook from '../../../../assets/images/About/BookATable.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BookForm from './BookForm';

export default function BookSection() {
  return (
    <div className="min-h-[80vh] flex justify-center w-full relative mt-14">
      <img src={imgBook} alt="" className="w-full h-full absolute" />
      <div className="container flex w-full relative mt-14">
        <div className="z-10 flex flex-col justify-center pr-2  ">
          <span className="text-[--white-color] text-5xl font-dancing-script sm:py-6 py-4 italic">
            Book Now!
          </span>
          <BookForm />
          <Button className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-[var(--white-color)] sm:text-xl ">
            BOOK
          </Button>
          <Link />
        </div>
      </div>
    </div>
  );
}
