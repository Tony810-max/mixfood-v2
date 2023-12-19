import { Martini, Soup, Truck } from 'lucide-react';
import React from 'react';
import OurSevice from '../../../../components/OurSevice';
import OurSevicesCard from '../../../../components/OurSevicesCard';
import OurContact from './OurContact';
import OpenningHours from './OpenningHours';

import summer from '../../../../assets/images/OurSevice/summerImage.png';
import winter from '../../../../assets/images/OurSevice/winterImage.jpg';

export default function OurSeviceSection() {
  return (
    <div className="min-h-[100vh] flex flex-col container w-full mt-4">
      <span className="font-dancing-script  text-center font-bold text-5xl py-8">
        OUR SERVICES
      </span>
      <div className="grid  lg:grid-cols-4  lg:grid-flow-col gap-2">
        <OurSevice
          Icon={Soup}
          number={50}
          Color={'var(--primary-color)'}
          content={
            'We offer a variety of delicious and unique Thai dishes, providing an authentic Thai culinary experience.'
          }
        />

        <OurSevice
          Icon={Martini}
          number={50}
          Color={'var(--primary-color)'}
          content={
            'We also have a wide selection of refreshing beverages to complement your meal, including traditional Thai drinks and exotic fruit juices.'
          }
        />
        <OurSevice
          Icon={Truck}
          number={50}
          Color={'var(--primary-color)'}
          content={
            'With our efficient delivery service, you can enjoy your favorite Thai food from the comfort of your own home.'
          }
        />
        <OurSevice
          Icon={Martini}
          number={50}
          Color={'var(--primary-color)'}
          content={
            'For those who prefer dining in, our friendly staff is dedicated to providing excellent service and creating a welcoming atmosphere for you to enjoy your meal.'
          }
        />
      </div>
      <div className="min-h-[100vh] grid w-full lg:grid-cols-3 grid-rows-2 gap-7 mt-8">
        <OurContact />
        <OurSevicesCard
          image={summer}
          title={'Special Combo Deals'}
          content={'Summer'}
          check={'CHECK THE MENU'}
        />
        <OurSevicesCard
          image={winter}
          title={'Special Combo Deals'}
          content={'Winter'}
          check={'CHECK THE MENU'}
        />
        <OpenningHours />
      </div>
    </div>
  );
}
