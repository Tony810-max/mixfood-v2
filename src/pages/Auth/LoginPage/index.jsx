/* eslint-disable prettier/prettier */
import React from 'react';

import lotusImg from '../../../assets/images/Auth/login-img.webp'
import LoginHeader from './components/LoginHeader';
import LoginFormWrapper from './components/LoginFormWrapper';
const LoginPage = () => {
    return (
        <div className='flex'>
            <img src={lotusImg} alt='img' className='min-h-screen' />
            <div className='w-full p-10'>
                <LoginHeader />
                <LoginFormWrapper />
            </div>
        </div>
    )
};

export default LoginPage;
