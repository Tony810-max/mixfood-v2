/* eslint-disable import/no-unresolved */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import sushi10 from '../../../../assets/images/HomePage/sushi10.webp';
import sushi11 from '../../../../assets/images/HomePage/sushi11.webp';
import sushi12 from '../../../../assets/images/HomePage/sushi12.webp';

import SpecialitiesCard from '../../../../components/Card/SpecialitiesCard';
import { Button } from '@mui/material';
import classNames from 'classnames';

const OurSpecialitiesSection = () => {
  const [currentTab, setCurrentTab] = useState({
    id: 1,
    name: 'Specialities',
    value: 'Specialities',
    data: [
      {
        id: 1,
        image: sushi10,
        name: 'Dragon Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
      {
        id: 2,
        image: sushi12,
        name: 'Creamy Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
      {
        id: 3,
        image: sushi11,
        name: 'Dragon Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
    ],
  });

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col items-center py-[6.25rem]">
      <div className="flex flex-col items-center">
        <span className="text-white  font-great-vibes tracking-[0.3rem] capitalize">
          Quality food for you
        </span>
        <span className="text-[#F3D382]  font-DM-Serif-Display text-[2.5rem]">
          Our Specialities
        </span>
        <span className="text-[#D9D9D9] mt-5 font-DM-Sans text-xl max-w-[25rem] text-center">
          Authentic food from our restaurant served with high quality
          ingredients
        </span>
      </div>
      <div className="mt-8 flex gap-5">
        {DATA_SPECIALITIES_TABS.map(tab => (
          <Button
            key={tab.id}
            onClick={() => setCurrentTab(tab)}
            className={classNames(
              'bg-[#1E1E1E] text-[#D9D9D9] font-DM-Sans whitespace-nowrap text-xl py-3 px-2 border-solid border-[0.065rem] border-[#fff] cursor-pointer hover:text-[#000] hover:bg-[#f5be31]',
              {
                'bg-[#f5be31] text-black ': tab.value === currentTab.value,
              }
            )}
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <div className="flex flex-col mt-7">
        {currentTab?.data?.map(itemp => (
          <motion.div
            key={itemp.id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: itemp.id * 0.2,
              ease: 'linear',
            }}
          >
            <SpecialitiesCard
              order={itemp.id}
              image={itemp.image}
              name={itemp.name}
              desc={itemp.desc}
              price={itemp.price}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialitiesSection;

const DATA_SPECIALITIES_TABS = [
  {
    id: 1,
    name: 'Specialities',
    value: 'Specialities',
    data: [
      {
        id: 1,
        image: sushi10,
        name: 'Dragon Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
      {
        id: 2,
        image: sushi12,
        name: 'Creamy Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
      {
        id: 3,
        image: sushi11,
        name: 'Dragon Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
    ],
  },
  {
    id: 2,
    name: 'Homestyle Sushi',
    value: 'HomestyleSushi',
    data: [
      {
        id: 1,
        image: sushi12,
        name: 'Creamy Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
    ],
  },
  {
    id: 3,
    name: 'Steak',
    value: 'Steak',
    data: [
      {
        id: 1,
        image: sushi11,
        name: 'Dragon Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
      {
        id: 2,
        image: sushi12,
        name: 'Creamy Sushi',
        desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: 50,
      },
    ],
  },
  // {
  //   id: 4,
  //   name: 'With Rice',
  //   value: 'WithRice',
  // },
  // {
  //   id: 5,
  //   name: 'Cocktails',
  //   value: 'Cocktails',
  // },
  // {
  //   id: 6,
  //   name: 'Wine',
  //   value: 'Wine',
  // },
  // {
  //   id: 7,
  //   name: 'Appetizer',
  //   value: 'Appetizer',
  // },
];
