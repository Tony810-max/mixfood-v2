/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import Show from '../Show';

const ButtonSignUp = ({ name, logo, theme = 'default' }) => {
  return (
    <Button
      className={classNames(
        'flex gap-4 w-full rounded-[2.5rem] border border-solid border-black py-4 px-[7.5rem]',
        {
          'bg-white text-[#333]': theme === 'default',
          'bg-black  text-white': theme === 'dark',
        }
      )}
    >
      <Show when={!!logo}>
        <img src={logo} alt="" className="w-6 h-6" />
      </Show>
      <span className="whitespace-nowrap text-lg leading-normal">{name}</span>
    </Button>
  );
};

export default ButtonSignUp;
