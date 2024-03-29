import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookTableModal from '../../BookTableModal';

import logo from '../../../assets/images/Logo/logo-mixfood.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container justify-between absolute hidden lg:flex py-20 items-center z-[999]">
      <Link
        to={'/'}
        className="flex flex-col justify-center gap-2 no-underline"
      >
        <img alt="" src={logo} className="w-[250px] lg:w-[300px]" />
        <span className="text-[var(--white-color)] italic text-lg w-full text-center">
          THAI RESTAURANT DA NANG
        </span>
      </Link>
      <div className="flex gap-4 ">
        <Link
          to={'#'}
          className="hover:opacity-60 no-underline text-[var(--white-color)] text-2xl font-light"
        >
          HOME
        </Link>
        <Link
          to={'#'}
          className="hover:opacity-60 no-underline text-[var(--white-color)] text-2xl font-light"
        >
          ABOUT US
        </Link>
        <Link
          to={'#'}
          className="hover:opacity-60 no-underline text-[var(--white-color)] text-2xl font-light"
        >
          MENU
        </Link>
        <Link
          to={'#'}
          className="hover:opacity-60 no-underline text-[var(--white-color)] text-2xl font-light"
        >
          SHOP
        </Link>
        <Link
          to={'#'}
          className="hover:opacity-60 no-underline text-[var(--white-color)] text-2xl font-light"
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
      </div>
      <BookTableModal onClose={handleClose} open={open} />
    </div>
  );
}
