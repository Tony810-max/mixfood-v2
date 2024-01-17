import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownHeader = () => {
  const [language, setLanguage] = useState('en');

  const handleChange = event => {
    setLanguage(event.target.value);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <Select
        value={language}
        onChange={handleChange}
        sx={{
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: 0,
            },
        }}
      >
        <MenuItem
          value={'en'}
          className="text-black font-poppins-font leading-normal"
        >
          English (united States)
        </MenuItem>
        <MenuItem
          value={'vn'}
          className="text-black font-poppins-font leading-normal"
        >
          Vietmese (Viet Nam)
        </MenuItem>
      </Select>
      <Link
        to={'/login'}
        className="whitespace-nowrap rounded-lg border border-solid border-[#111] py-2 px-6 text-center leading-normal"
      >
        Log in
      </Link>
    </div>
  );
};

export default DropdownHeader;
