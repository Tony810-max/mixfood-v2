/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SubHeader = ({ check }) => {
  const handleClose = () => {
    check(false);
  };

  return (
    <div className="fixed flex flex-col top-20 p-4 backdrop-blur w-full z-[99999] ">
      <div className="text-white p-4 flex flex-col gap-1 md:gap-8 font-cormorant-serif text-xl font-normal leading-normal">
        <Link to={'/'} className="font-cormorant-serif">
          Menu
        </Link>
        <Link to={'/'} className="font-cormorant-serif">
          Fine Dining
        </Link>
        <Link to={'/'} className="font-cormorant-serif">
          About
        </Link>
        <Link to={'/'} className="font-cormorant-serif">
          Contact
        </Link>
      </div>
      <div className="flex gap-3">
        <Button className="rounded-none text-center text-xl uppercase border-2 border-solid border-[#F5BE32] font-semibold font-cormorant-serif text-[#F5BE32] hover:opacity-70">
          Reservation
        </Button>
        <Button
          className="rounded-none text-center text-xl uppercase border-2 border-solid border-[#F5BE32] font-semibold font-cormorant-serif text-[#F5BE32] hover:opacity-70"
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default SubHeader;
