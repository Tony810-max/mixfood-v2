/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import React from 'react';

import { DATA_SPECIALITIES_TABS } from './index';
import classNames from 'classnames';

const OurSpecialitesTabs = ({ currentTab, onSetCurrentTab }) => {
  return (
    <div className="mt-8 sm:flex gap-5 hidden">
      {DATA_SPECIALITIES_TABS.map(tab => (
        <Button
          key={tab.id}
          onClick={() => onSetCurrentTab(tab)}
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
  );
};

export default OurSpecialitesTabs;
