/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

import { DATA_SPECIALITIES_TABS } from './index';

const DropDownOurSpecial = ({ curTab }) => {
  const [age, setAge] = useState(DATA_SPECIALITIES_TABS[0].id);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      className="mt-5 block sm:hidden border-2 border-solid border-[#fff]"
      sx={{ m: 1, minWidth: 300 }}
    >
      <Select
        value={age}
        onChange={handleChange}
        className="w-full text-white focus:outline-none"
        sx={{
          color: '#fff',
          '& .MuiSvgIcon-root': {
            color: 'white',
            fontSize: 32,
          },
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
        {DATA_SPECIALITIES_TABS.map(tab => (
          <MenuItem key={tab.id} value={tab.id} onClick={() => curTab(tab)}>
            {tab.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownOurSpecial;
