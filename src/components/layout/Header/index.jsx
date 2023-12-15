import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="absolute flex gap-4 py-20 items-center z-[999] invisible lg:visible">
      <Link
        to={'#'}
        className="hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        HOME
      </Link>
      <Link
        to={'#'}
        className="hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        ABOUT US
      </Link>
      <Link
        to={'#'}
        className="hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        MENU
      </Link>
      <Link
        to={'#'}
        className="hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        SHOP
      </Link>
      <Link
        to={'#'}
        className="hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        CONTACT
      </Link>
      <Button
        variant="outlined"
        className="border-[#fff] text-xl font-light px-4 text-[#fff] hover:bg-gray-600"
      >
        BOOK A TABLE
      </Button>
    </div>
  );
}
