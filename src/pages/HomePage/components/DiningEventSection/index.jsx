import React, { useState } from 'react';

import finedining2 from '../../../../assets/images/HomePage/finedining2.webp';
import finedining from '../../../../assets/images/HomePage/finedining.webp';
import DiningEventTitle from './DiningEventTitle';
import DiningEventTabs from './DiningEventTabs';
import DiningEventList from './DiningEventList';

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
        <DiningEventTitle />
        <DiningEventTabs
          currentTab={currentTab}
          onSetCurrentTab={setCurrentTab}
        />
        <DiningEventList currentTab={currentTab} />
      </div>
    </div>
  );
};

export default DiningEventSection;
