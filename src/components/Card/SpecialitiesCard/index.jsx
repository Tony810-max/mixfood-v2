/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

const SpecialitiesCard = ({ image, name, desc, price, order }) => {
  return (
    <div className="flex container gap-4">
      <div className={classNames({ 'order-2': order % 2 === 0 })}>
        <img src={image} alt="" className="w-full" />
      </div>
      <div
        className={classNames('flex flex-col justify-center ', {
          'order-1': order % 2 === 0,
        })}
      >
        <span className="text-[#F3D382] font-cinzel-serif text-2xl font-bold">
          {name}
        </span>
        <span className="mt-3 max-w-[28rem] text-[#D9D9D9] text-xl font-DM-Sans">
          {desc}
        </span>
        <span className="mt-8 text-[#F3D382] font-cinzel-serif text-[2.2rem] font-bold">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default SpecialitiesCard;
