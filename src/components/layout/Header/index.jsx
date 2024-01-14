import React from 'react';

import logo from '../../../assets/images/logo.webp';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className="md:flex fixed hidden justify-around items-center top-3 left-0 right-0 backdrop-blur z-[9999] ">
      <div className="w-20 h-20">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="text-white flex gap-8 font-cormorant-serif text-xl font-normal leading-normal">
        <span className="font-cormorant-serif">Menu</span>
        <span className="font-cormorant-serif">Fine Dining</span>
        <span className="font-cormorant-serif">About</span>
        <span className="font-cormorant-serif">Contact</span>
      </div>
      <Button
        variant="outlined"
        className="rounded-none text-center text-xl uppercase border-2 border-[#F5BE32] font-semibold font-cormorant-serif text-[#F5BE32] hover:opacity-70"
      >
        Reservation
      </Button>
    </div>
  );
};

export default Header;
