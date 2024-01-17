/* eslint-disable prettier/prettier */
import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const LanguagesDropdown = () => {
    const [language, setLanguage] = useState('en');

    const handleChange = event => {
        setLanguage(event.target.value);
    };
    return (
        <>
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
        </>
    );
};

export default LanguagesDropdown;
