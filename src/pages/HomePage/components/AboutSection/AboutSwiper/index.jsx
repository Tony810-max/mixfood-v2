/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import CardFood from '../../../../../components/AboutFoodCard';

import padthai from '../../../../../assets/images/Food/PadThai.jpg';
import tomyum from '../../../../../assets/images/Food/Tomyum.jpg';
import curry from '../../../../../assets/images/Food/curryRed.png';
import noodle from '../../../../../assets/images/Food/My-xao-hai-san.jpg';
import vermicelliSalad from '../../../../../assets/images/Food/vermicelliSalad.png';
import thaiShrimpSalad from '../../../../../assets/images/Food/thaiShrimpSalad.png';
import goixoai from '../../../../../assets/images/Food/Goi-xoai.jpg';
import hotPot from '../../../../../assets/images/Food/Lau-thai.jpg';
import larb from '../../../../../assets/images/Food/Larb.jpg';

export default function AboutSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={5000}
      className=" my-20"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={noodle} name={'NOODLE'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={curry} name={'CURRY'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={vermicelliSalad} name={'VERMICELLI SALAD'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={padthai} name={'PAD THAI'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={tomyum} name={'TOMYUM'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={goixoai} name={'MANGO SALAD'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={thaiShrimpSalad} name={'THAI SHRIMP SALAD'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={hotPot} name={'HOTPOT'} />
      </SwiperSlide>
      <SwiperSlide className="h-[180px] lg:h-[400px]">
        <CardFood image={larb} name={'LARB'} />
      </SwiperSlide>
    </Swiper>
  );
}
