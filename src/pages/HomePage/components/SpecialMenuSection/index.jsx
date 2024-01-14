import React from 'react';
import SpecialCard from '../../../../components/Card/SpecialCard';

import sushi from '../../../../assets/images/HomePage/sushi3.webp';
import sushi1 from '../../../../assets/images/HomePage/sushi1.webp';
import sushi3 from '../../../../assets/images/HomePage/sushi3.webp';

const SpecialMenuSection = () => {
  return (
    <div className="py-24 flex flex-col items-center bg-[#1E1E1E]">
      <div className="container text-white flex flex-col items-center">
        <span className=" font-great-vibes capitalize">Special menu</span>
        <span className="text-[#F3D382] font-DM-Serif-Display text-4xl text-center">
          Today’s Special
        </span>
        <span className="text-[#D9D9D9] text-center font-DM-Sans max-w-[27.4rem] mt-5">
          Special menu oftenly comes different everyday, this is our special
          food for today
        </span>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 container h-full mt-11">
        {DATA?.map(item => (
          <SpecialCard
            key={item.id}
            name={item.name}
            image={item.image}
            desc={item.desc}
            theme={item.theme}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialMenuSection;

const DATA = [
  {
    id: 1,
    name: 'Tuna Sushi',
    image: sushi,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
    theme: 'default',
    rate: 4,
  },
  {
    id: 2,
    name: 'Salmon Sushi',
    image: sushi1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
    theme: 'dark',
    rate: 5,
  },
  {
    id: 3,
    name: 'Just Sushi',
    image: sushi3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
    theme: 'default',
    rate: 3,
  },
];
