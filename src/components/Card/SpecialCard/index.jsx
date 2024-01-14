/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import classNames from 'classnames';
import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const SpecialCard = ({ name, image, desc, theme = 'default', rate }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let starsData = [];
    for (let i = 0; i < rate; i++) {
      starsData.push(1);
    }
    setStars(starsData);
  }, [rate]);

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <img src={image} alt="" className="w-full h-80" />
      </div>
      <div
        className={classNames('flex flex-col px-8 py-11 ', {
          'bg-[#2e2e2e]': theme === 'default',
          'bg-[#1e1e1e]': theme === 'dark',
        })}
      >
        <span className="text-[#F3D382] font-cinzel-serif text-2xl font-bold">
          {name}
        </span>
        <span className="text-white text-xl max-w-[20rem] font-DM-Sans mt-3">
          {desc}
        </span>
        <div className="flex mt-5">
          {stars?.map((_, index) => (
            <Star key={index} fill="#F5BE32" color="" size={40} />
          ))}
        </div>
        <Button
          variant="outlined"
          className="w-fit border-2 mt-7 border-[#F5BE32] py-3 px-4 text-[#F5BE32] font-cormorant-serif text-xl font-semibold capitalize"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default SpecialCard;
