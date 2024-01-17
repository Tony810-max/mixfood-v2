/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import sushi10 from '../../../../assets/images/HomePage/sushi10.webp';
import sushi11 from '../../../../assets/images/HomePage/sushi11.webp';
import sushi12 from '../../../../assets/images/HomePage/sushi12.webp';

import DropDownOurSpecial from './DropDownOurSpecial';
import OurSpecialitesTitle from './OurSpecialitesTitle';
import OurSpecialitesTabs from './OurSpecialitesTabs';
import OurSpecialitiesList from './OurSpecialitiesList';

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
      <OurSpecialitesTitle />
      <OurSpecialitesTabs
        currentTab={currentTab}
        onSetCurrentTab={setCurrentTab}
      />
      <DropDownOurSpecial curTab={setCurrentTab} />
      <OurSpecialitiesList currentTab={currentTab} />
      <button onClick={setCurrentTab}></button>
    </div>
  );
};

export default OurSpecialitiesSection;

export const DATA_SPECIALITIES_TABS = [
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
