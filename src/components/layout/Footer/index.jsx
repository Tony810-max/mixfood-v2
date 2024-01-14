import React from 'react';

import footerBanner from '../../../assets/images/HomePage/footer-banner.webp';
import AboutFooter from './AboutFooter';
import { Button } from '@mui/material';
import ContactFooter from './ContactFooter';

const Footer = () => {
  return (
    <div className=" w-full relative z-0 ">
      <img src={footerBanner} alt="" className="w-full  " />
      <div className="absolute z-30 top-0 bottom-0 flex flex-col items-center w-full py-[6.25rem] text-white">
        <span className="text-[#F3D382] text-center font-cinzel-serif text-xl lg:text-6xl font-bold max-w-[52rem] leading-normal">
          We ready to have you the best dining experiences
        </span>
        <AboutFooter />
        <Button className="mt-16 border border-solid border-black bg-[#F5BE32] py-3 px-3 text-black font-cormorant-serif text-xl leading-normal hover:opacity-70">
          Reserve a Table
        </Button>
        <ContactFooter />
      </div>
    </div>
  );
};

export default Footer;
