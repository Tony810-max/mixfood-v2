import React from 'react';

import logo from '../../../assets/images/logo.webp';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="md:flex fixed hidden justify-around items-center top-3 left-0 right-0 backdrop-blur z-[9999] ">
      <div className="w-20 h-20">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className=" flex gap-8 ">
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          Menu
        </Link>
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          Fine Dining
        </Link>
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          About
        </Link>
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          Contact
        </Link>
      </div>
      <Link to="/login">
        <Button
          variant="outlined"
          className="rounded-none text-center text-xl uppercase border-2 border-[#F5BE32] font-semibold font-cormorant-serif text-[#F5BE32] hover:opacity-70"
        >
          Reservation
        </Button>
      </Link>
    </div>
  );
};

export default Header;
