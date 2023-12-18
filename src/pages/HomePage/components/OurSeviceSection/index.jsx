import { Martini, Soup, Truck } from 'lucide-react';
import React from 'react';
import OurSevice from '../../../../components/OurSevice';

export default function OurSeviceSection() {
  return (
    <div className="min-h-[100vh] flex flex-col container  w-full mt-4">
      <span className="font-dancing-script  text-center font-bold text-5xl py-8">
        OUR SERVICES
      </span>
      <div className="grid grid-cols-4  grid-flow-col gap-2">
        <OurSevice
          Icon={Soup}
          number={50}
          Color={'red'}
          content={
            'We offer a variety of delicious and unique Thai dishes, providing an authentic Thai culinary experience.'
          }
        />

        <OurSevice
          Icon={Martini}
          number={50}
          Color={'red'}
          content={
            'We also have a wide selection of refreshing beverages to complement your meal, including traditional Thai drinks and exotic fruit juices.'
          }
        />
        <OurSevice
          Icon={Truck}
          number={50}
          Color={'red'}
          content={
            'With our efficient delivery service, you can enjoy your favorite Thai food from the comfort of your own home.'
          }
        />
        <OurSevice
          Icon={Martini}
          number={50}
          Color={'red'}
          content={
            'For those who prefer dining in, our friendly staff is dedicated to providing excellent service and creating a welcoming atmosphere for you to enjoy your meal.'
          }
        />
      </div>
      <div className=""></div>
    </div>
  );
}
