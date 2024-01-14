/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

const Tab = ({ name }) => {
  return (
    <Button
      className={classNames(
        'bg-[#1E1E1E] py-3 px-2 border-solid border-[0.065rem] border-[#fff] cursor-pointer hover:bg-[#f5be31]'
      )}
    >
      <span className="text-[#D9D9D9] font-DM-Sans whitespace-nowrap text-xl">
        {name}
      </span>
    </Button>
  );
};

export default Tab;
