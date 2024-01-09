import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookTableModal from '../../../BookTableModal';

export default function NavFooter() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col items-center flex-1">
      <Link to={'/'}>HOME</Link>
      <Link to={'/'}>ABOUT US</Link>
      <Link to={'/'}>MENU</Link>
      <Link to={'/'}>CONTACT</Link>
      <Button
        variant="outlined"
        className=" hover:text-[--primary-color] w-full"
        onClick={handleOpen}
      >
        BOOK A TABLE
      </Button>

      <BookTableModal onClose={handleClose} open={open} />
    </div>
  );
}
