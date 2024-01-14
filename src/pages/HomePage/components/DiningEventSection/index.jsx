import { Button } from '@mui/material';
import classNames from 'classnames';
import React, { useState } from 'react';
import DiningEventCard from '../../../../components/Card/DiningEventCard';

import finedining2 from '../../../../assets/images/HomePage/finedining2.webp';
import finedining from '../../../../assets/images/HomePage/finedining.webp';
import luxurybg2 from '../../../../assets/images/HomePage/luxurybg2.webp';

const DiningEventSection = () => {
  const [currentTab, setCurrentTab] = useState({
    id: 1,
    name: 'Private Events',
    value: 'PrivateEvents',
    data: [
      {
        id: 1,
        name: 'Fine Dining',
        price: 500,
        image: finedining2,
        desc: 'Bottle of Champagne Fine Sushi Tower For 2 + Dessert',
      },
      {
        id: 2,
        name: 'Gold Dining',
        price: 1000,
        image: finedining,
        desc: 'Bottle of Champagne Secret Menu Sushi For 2 + Dessert',
      },
    ],
  });
  return (
    <div className="min-h-screen bg-[#1E1E1E] flex justify-center">
      <div className="container h-full w-full flex flex-col ">
        <div className="flex flex-col items-center">
          <span className="text-white text-center font-great-vibes tracking-[0.3rem] capitalize">
            Choose your event
          </span>
          <span className="text-[#F3D382] text-center font-DM-Serif-Display text-[2.5rem] ">
            Dining Events
          </span>
          <span className="text-[#D9D9D9] mt-5 font-DM-Sans text-xl text-center max-w-[25.8rem]">
            We provide dining event for your special day with your important
            people
          </span>
        </div>
        <div className="flex justify-center gap-5 mt-8">
          {DATA_DINING_EVENTS_TABS.map(tab => (
            <Button
              onClick={() => setCurrentTab(tab)}
              className={classNames(
                'text-[#D9D9D9]  border-solid py-3 px-4 border border-[#fff] hover:bg-[#F5BE32] hover:text-[#000] hover:border-[#F5BE32]',
                {
                  'bg-[#F5BE32] text-black border-[#F5BE32]':
                    tab.value === currentTab.value,
                }
              )}
              key={tab.id}
            >
              {tab.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-col items-center mt-12 h-full">
          {currentTab?.data?.map(itemp => (
            <DiningEventCard
              key={itemp.id}
              order={itemp.id}
              name={itemp.name}
              image={itemp.image}
              price={itemp.price}
              desc={itemp.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiningEventSection;

const DATA_DINING_EVENTS_TABS = [
  {
    id: 1,
    name: 'Private Events',
    value: 'PrivateEvents',
    data: [
      {
        id: 1,
        name: 'Fine Dining',
        price: 500,
        image: finedining2,
        desc: 'Bottle of Champagne Fine Sushi Tower For 2 + Dessert',
      },
      {
        id: 2,
        name: 'Gold Dining',
        price: 1000,
        image: finedining,
        desc: 'Bottle of Champagne Secret Menu Sushi For 2 + Dessert',
      },
      {
        id: 3,
        name: 'Gold Dining',
        price: 1000,
        image: luxurybg2,
        desc: 'Bottle of Champagne Secret Menu Sushi For 2 + Dessert',
      },
    ],
  },
  {
    id: 2,
    name: 'Corporate Events',
    value: 'CorporateEvents',
    data: [
      {
        id: 1,
        name: 'Gold Dining',
        price: 1000,
        image: finedining,
        desc: 'Bottle of Champagne Secret Menu Sushi For 2 + Dessert',
      },
    ],
  },
];
