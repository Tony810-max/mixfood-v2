/* eslint-disable import/no-unresolved */
import React from 'react';
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';
// components
import CardFood from '../../../../components/AboutFoodCard';

// images
import aboutImage from '../../../../assets/images/About/about.png';
import padthai from '../../../../assets/images/Food/PadThai.jpg';
import tomyum from '../../../../assets/images/Food/Tomyum.jpg';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <div className="min-h-[100vh] container">
      <div className="flex flex-col lg:flex-row items-center justify-between py-4 font-Roboto-font">
        <span className="text-sm sm:text-lg italic font-medium ">
          ADDRESS : K49 Nguyen Van Thoai,Hai Chau, Da Nang
        </span>
        <span className="text-sm sm:text-lg italic font-medium">
          EMAIL : Mixfood1708@gmail.com
        </span>
      </div>
      <div className="flex flex-col xl:flex-row mt-14 justify-between font-Roboto-font gap-12">
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-extrabold text-3xl lg:text-5xl italic font-dancing-script">
            ABOUT US
          </span>
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
            className="w-full bg-cover h-full object-fill"
          />
        </div>
      </div>
      <Swiper
        // modules={[Autoplay]}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}
        className="mySwiper mt-4 "
      >
        <SwiperSlide className="h-[180px] lg:h-[400px]">
          <CardFood image={padthai} name={'PAD THAI'} />
        </SwiperSlide>
        <SwiperSlide className="h-[180px] lg:h-[400px]">
          <CardFood image={tomyum} name={'TOMYUM'} />
        </SwiperSlide>
        <SwiperSlide className="h-[180px] lg:h-[400px]">
          <CardFood image={tomyum} name={'TOMYUM'} />
        </SwiperSlide>
        <SwiperSlide className="h-[180px] lg:h-[400px]">
          <CardFood image={tomyum} name={'TOMYUM'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
