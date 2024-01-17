/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@mui/material';
import classNames from 'classnames';

import finedining2 from '../../../../assets/images/HomePage/finedining2.webp';
import finedining from '../../../../assets/images/HomePage/finedining.webp';
import luxurybg2 from '../../../../assets/images/HomePage/luxurybg2.webp';

const DiningEventTabs = ({ onSetCurrentTab, currentTab }) => {
  return (
    <div className="flex justify-center gap-5 mt-8">
      {DATA_DINING_EVENTS_TABS.map(tab => (
        <Button
          onClick={() => onSetCurrentTab(tab)}
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
  );
};

export default DiningEventTabs;

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
