import React, { useState } from 'react';

import bannerImage from '../../../../assets/images/Banner/banner.png';
import { Button } from '@mui/material';
import BookTableModal from '../../../../components/BookTableModal';

export default function BannerSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center">
      <img
        src={bannerImage}
        alt="banner"
        className="absolute w-full bg-contain no-repeat h-full"
      />
      <div className="absolute flex flex-col items-center gap-4 text-justify	">
        <span className="text-[var(--white-color)]  text-2xl sm:text-6xl font-light drop-shadow">
          THAI RESTAURANT
        </span>
        <span className="text-[var(--white-color)]  text-4xl sm:text-9xl font-dancing-script">
          MIX FOOD
        </span>
        <span className="text-[var(--white-color)] text-xl font-medium">
          THAI RESTAURANT DA NANG
        </span>
        <Button
          variant="contained"
          className="bg-[--primary-color] text-2xl px-8 mt-8 hover:bg-[--secondary-color]"
          onClick={handleOpen}
        >
          BOOK A TABLE
        </Button>
        <BookTableModal onClose={handleClose} open={open} />
      </div>
    </div>
  );
}
