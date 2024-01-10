import React from 'react';
import OurSevicesCard from '../../../../components/OurSevicesCard';
import OurContact from './OurContact';
import OpenningHours from './OpenningHours';

import summer from '../../../../assets/images/OurSevice/summerImage.png';
import winter from '../../../../assets/images/OurSevice/winterImage.jpg';
import ListServices from './ListServices';

export default function OurSeviceSection() {
  return (
    <div className="min-h-[100vh] flex flex-col container w-full py-20">
      <span className="font-dancing-script text-3xl text-center font-bold lg:text-5xl py-8">
        OUR SERVICES
      </span>
      <ListServices />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col flex-1 gap-4">
          <OurContact />
          <OpenningHours />
        </div>
        <div className="flex flex-[2] flex-col lg:flex-row gap-0 lg:gap-4">
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
        </div>
      </div>
    </div>
  );
}
