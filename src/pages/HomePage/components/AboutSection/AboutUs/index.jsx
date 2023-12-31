import React from 'react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import aboutImage from '../../../../../assets/images/About/com-ruoc.jpg';

export default function AboutUs() {
  return (
    <div className="flex flex-col  px-6 font-Roboto-font gap-12">
      <span className="font-extrabold text-3xl lg:text-5xl italic font-dancing-script flex justify-center">
        ABOUT US
      </span>
      <div className="flex gap-12 flex-col lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-medium text-xl italic">
            Welcome to our Thai restaurant...!
          </span>
          <span className="text-justify text-lg font-poppins-font">
            We are a family-owned business that has been serving authentic Thai
            cuisine for over 2 years. Our menu features a wide variety of dishes
            that are made with fresh ingredients and traditional Thai spices. We
            take pride in providing our customers with a warm and welcoming
            atmosphere, where they can enjoy delicious food and great company.
            Whether you are looking for a quick lunch or a romantic dinner for
            two, we have something for everyone. Come visit us today and
            experience the flavors of Thailand!
          </span>
          <Link to="/" className="no-underline">
            <Button
              variant="contained"
              className="bg-[--primary-color] hover:bg-[--secondary-color] w-full text-xl"
            >
              VIEW THE MENU
            </Button>
          </Link>
        </div>
        <div className="flex w-full flex-1 h-full">
          <img
            src={aboutImage}
            alt="aboutImage"
            className="w-full bg-cover h-full "
          />
        </div>
      </div>
    </div>
  );
}
