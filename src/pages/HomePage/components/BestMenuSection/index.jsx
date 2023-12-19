import React from 'react';
import SpecialCard from '../../../../components/SpecialCard';

import padthai from '../../../../assets/images/Food/PadThai.jpg';
import noodle from '../../../../assets/images/Food/Noodle.png';

export default function BestMenuSection() {
  return (
    <div className="min-h-[100vh] mt-5 flex flex-col container items-center">
      <span className="py-10 text-5xl  font-Roboto-font font-bold">
        SPECIALITIES
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-5 w-full">
        <SpecialCard
          image={padthai}
          name={'Seafood Pad Thai'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
        <SpecialCard
          image={noodle}
          name={'Noodle'}
          title={'day la tieu de'}
          price={'75.000'}
          label={'BEST SELLER'}
        />
      </div>
    </div>
  );
}
