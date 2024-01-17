/* eslint-disable prettier/prettier */
import React from 'react';
import LoginFormTitle from './LoginFormTitle';
import LoginForm from './LoginForm';
import LoginSocial from './LoginSocial';
import { Divider } from '@mui/material';

const LoginFormWrapper = () => {
    return (
        <div className='relative left-1/2 -translate-x-1/2 w-fit flex flex-col gap-8 p-10 border border-gray-500 rounded-3xl mt-9'>
            <LoginFormTitle />
            <LoginForm />
            <Divider>OR</Divider>
            <LoginSocial />
        </div>
    )
};

export default LoginFormWrapper;
