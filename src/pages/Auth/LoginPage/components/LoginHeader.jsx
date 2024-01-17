/* eslint-disable prettier/prettier */
import React from 'react';
import LanguagesDropdown from '../../../../components/LanguagesDropdown';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import ROUTES from '../../../../types/routes'

const LoginHeader = () => {
    return (
        <div className='flex justify-between'>
            <LanguagesDropdown />
            <div className='flex items-center gap-2'>
                <span className='text-[#333] text-lg leading-normal'>
                    Already have an account?
                </span>
                <Link to={ROUTES.SIGNUP}>
                    <Button variant='outlined' className='text-[#111] rounded-3xl border-black py-1 px-7'>Sign up</Button>
                </Link>
            </div>
        </div>
    )
};

export default LoginHeader;
