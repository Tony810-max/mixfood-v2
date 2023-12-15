import React, { useState } from 'react';

import bannerImage from '../../../../assets/images/Banner/banner.png';
import { Button } from '@mui/material';
import ModalBookATable from '../../../../components/ModalBookATable';

export default function BannerSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="w-full h-[100vh] relative flex justify-center items-center">
      <img
        src={bannerImage}
        alt="banner"
        className="absolute w-full bg-contain no-repeat h-full"
      />
      <div className="absolute flex flex-col items-center gap-4 text-justify	">
        <span className="text-[var(--white-color)] text-2xl sm:text-6xl font-light drop-shadow">
          THE UNIQUE
        </span>
        <span className="text-[var(--white-color)] text-5xl sm:text-9xl font-dancing-script">
          Restaurant
        </span>
        <span className="text-[var(--white-color)] text-xl font-medium">
          STEAK HOUSE | FISH MENU
        </span>
        <Button
          variant="contained"
          className="bg-[#bfa58a] text-2xl px-8 mt-8 hover:bg-slate-700"
          onClick={handleOpen}
        >
          BOOK A TABLE
        </Button>
        <ModalBookATable valueOpen={open} />
      </div>
    </div>
  );
}
