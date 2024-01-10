import React from 'react';
import SpecialCard from '../../../../components/SpecialCard';

import padthai from '../../../../assets/images/Food/PadThai.jpg';
import noodle from '../../../../assets/images/Food/Noodle.png';

export default function BestMenuSection() {
  return (
    <div className="min-h-[100vh] flex flex-col container items-center ">
      <span className="text-3xl lg:text-5xl font-dancing-script font-bold py-10">
        SPECIALITIES
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
