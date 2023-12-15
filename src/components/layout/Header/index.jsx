import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookTableModal from '../../BookTableModal';

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        onClick={handleOpen}
      >
        BOOK A TABLE
      </Button>
      <BookTableModal onClose={handleClose} open={open} />
    </div>
  );
}
