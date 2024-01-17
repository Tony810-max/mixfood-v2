/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import classNames from 'classnames';

const DiningEventCard = ({ name, price, desc, image, order }) => {
  const isEvenOrder = useMemo(() => order % 2 === 0, [order]);

  return (
    <div
      className={classNames('relative flex h-full w-full justify-end lg:px-3', {
        'lg:flex-row': !isEvenOrder,
        'lg:flex-row-reverse': isEvenOrder,
      })}
    >
      <div
        style={{ direction: isEvenOrder ? 'rtl' : 'ltr' }}
        className={classNames(
          'absolute z-30 top-1/2 -translate-y-1/2 lg:left-12 flex gap-3',
          {
            'lg:left-2 left-0': !isEvenOrder,
            'lg:right-40': isEvenOrder,
          }
        )}
      >
        <span className="text-[#F3D382] font-cinzel-serif text-3xl lg:text-[2.9rem] font-bold lg:-mt-2 ">
          ${price}
        </span>
        <div
          className={classNames('flex flex-col', {
            'lg:items-end': isEvenOrder,
          })}
        >
          <span className="text-[#F3D382] font-cinzel-serif text-lg lg:text-2xl  font-bold">
            {name}
          </span>
          <span
            className={classNames(
              'text-[#D9D9D9] lg:max-w-[14rem] text-base lg:text-xl font-medium',
              {
                'lg:text-right': isEvenOrder,
              }
            )}
          >
            {desc}
          </span>
        </div>
      </div>
      <div className="relative">
        <img src={image} alt="" className="z-10" />
        <span
          className={classNames('absolute w-full h-full top-0 z-20', {
            'bg-gradient-linear-ver-1': !isEvenOrder,
            'bg-gradient-linear-ver-2': isEvenOrder,
          })}
        />
      </div>
    </div>
  );
};

export default DiningEventCard;
