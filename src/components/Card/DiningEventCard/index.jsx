/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

const DiningEventCard = ({ name, price, desc, image, order }) => {
  console.log(order);
  return (
    <div
      className={classNames(
        'lg:relative flex lg:flex-row flex-col mt-40 h-full w-full justify-end lg:px-3',
        {
          'flex-row lg:flex-row-reverse': order % 2 === 0,
        }
      )}
    >
      <div
        className={classNames(
          'lg:absolute z-30 lg:top-1/2 lg:left-2  -translate-y-1/2 xl:left-12 flex gap-3',
          {
            'lg:flex-row-reverse lg:right-40 ': order % 2 === 0,
          }
        )}
      >
        <span className="text-[#F3D382] font-cinzel-serif text-[2.9rem] font-bold lg:-mt-8 ">
          ${price}
        </span>
        <div
          className={classNames('flex flex-col', {
            'lg:items-end': order % 2 === 0,
          })}
        >
          <span className="text-[#F3D382] font-cinzel-serif text-2xl  font-bold">
            {name}
          </span>
          <span
            className={classNames(
              'text-[#D9D9D9] lg:max-w-[14rem] text-xl font-medium',
              {
                'lg:text-right': order % 2 === 0,
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
          className={classNames(
            'absolute w-full h-full top-0 z-20 bg-gradient-linear-ver-1',
            {
              'bg-gradient-linear-ver-2': order % 2 === 0,
            }
          )}
        />
      </div>
    </div>
  );
};

export default DiningEventCard;
