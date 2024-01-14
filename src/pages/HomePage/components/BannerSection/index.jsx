/* eslint-disable import/no-unresolved */
import React from 'react';
import BANNER_HOME_PAGE_BACKGROUND from '../../../../assets/images/HomePage/background.webp';
import { Button } from '@mui/material';

const BannerSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <img
        src={BANNER_HOME_PAGE_BACKGROUND}
        alt="bg"
        className="absolute top-0 left-0 bottom-0 w-full h-full z-[-1]"
      />
      <div className="flex flex-col items-center">
        <span className="font-great-vibes text-white text-2xl tracking-wider capitalize">
          Best sushi in town
        </span>
        <span className="font-cinzel-serif leading-normal text-[#F3D382] text-6xl font-bold text-center max-w-[49.75rem]">
          Taste the rich flavor of high quality sushi
        </span>
        <span className="text-[#D9D9D9] text-center text-xl leading-normal max-w-[23rem]">
          We only use the five star quality for our menu, come and get the
          richness in every food we serve.
        </span>
      </div>
      <Button className="bg-[#F5BE32] py-3 px-10 mt-[3.06rem] uppercase font-cormorant-serif text-xl text-black font-semibold hover:opacity-70">
        Go to menu
      </Button>
    </div>
  );
};

export default BannerSection;
